<template>
    <div class="products-list">
        <div v-for="(product, index) in $store.getters.products" :key="index" @click="$router.push(`/product/${product.slug}`)">
            <img :src="product.imgUrl">
            <h2>{{ product.name }}</h2>
            <p class="description">{{ product.description }}</p>
            <p class="price">{{ product.price }}</p>
            <button @click.stop="deleteProduct(index)">ⓧ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products',
    methods: {
        deleteProduct(index) {
            this.$store.commit('deleteProduct', index)
        }
    }
}
</script>

<style scoped>
.products-list {
  display: flex;
  padding-top: 30px;
}
.products-list div {
  width: 33%;

  box-sizing: border-box;
  padding: 30px;
  background-color: lightsalmon;
}

button {
  padding: 30px;
  font-size: 2rem;
}

.description,
.price {
  padding-top: 20px;
}
</style>