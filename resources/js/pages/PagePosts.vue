<template>
    <div class="container my-5 py-5">
        <div class="row g-3">
            <div class="col-sm-6 col-md-4" v-for="post in arrPosts" :key="post.id">
                <div class="card h-100">
                    <img :src="'/storage/' + post.uploaded_img" class="card-img-top h-50" :alt="post.title">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text flex-grow-1">{{ post.excerpt }}</p>
                        <router-link :to="{name: 'postsShow', params: {slug: post.slug}}" class="btn btn-primary">Leggi il Post</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrPosts: [],
        };
    },
    created() {
        axios.get('api/posts')
            .then(response => this.arrPosts = response.data.results)
    },
}
</script>

<style>

</style>
