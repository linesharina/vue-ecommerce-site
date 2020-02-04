<template>
    <div class="container">
        <div class="content">
            <h1>{{product.name}}</h1>
            <p class="description">{{product.description}}</p>
            <p class="price">${{product.price}}</p>
        </div>
        <img :src="product.imageUrl" class="image">
        <button @click="addToCart">Add to cart</button>
    </div>
</template>
<script>
export default {
    name: 'Product',
    data() {
        return {
            product: {}
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', { product: this.product, quantity: 1 })
        }
    },
    mounted() {
        this.product = this.$store.getters.products
            .filter(item => item.slug === this.$route.params.slug)
            .shift()
    }
}
</script>

<style scoped>
button {
  margin-top: 50px;
  padding: 10px 40px;
  background-color: lightgreen;
  border-color: gray;
}

.container {
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 1200px;
}
.image {
}

.content h1 {
  padding-bottom: 50px;
}

.description,
.price {
  padding-top: 20px;
}
</style>