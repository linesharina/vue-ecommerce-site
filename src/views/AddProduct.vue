<template>
    <form>
        <h1>Add product</h1>
        <div>
            <label>Name:</label> <input required v-model="name">
        </div>
        <div>
            <label>Price in $:</label> <input required v-model="price">
        </div>
        <div>
            <label>Description:</label> <textarea required v-model="description"></textarea>
        </div>
        <div>
            <label>Image URL:</label> <input required v-model="imageUrl">
        </div>
        <div>
            <input type="submit" value="Add" class="button">
        </div>
    </form>
</template>
<script>
export default {
    name: 'AddProduct',
}
</script>