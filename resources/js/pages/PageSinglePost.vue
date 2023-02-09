<template>
    <div class="container py-5 my-5">
        <div v-if="objPost">
         <h1>{{ objPost.title }}</h1>
         <h3>Nella categoria: {{ objPost.category_name }}</h3>
         <div class="tags">
            <span v-for="tag in objPost.tags" :key="tag.id" class="tag">
               {{ tag.name }}
            </span>
         </div>
         <p>{{ objPost.content }}</p>
      </div>
    </div>
</template>

<script>
import Page404 from './Page404';

export default {
    components: {
      Page404,
   },
   props: [
      'slug',
   ],
   data() {
      return {
         is404: false,
         objPost: null,
      }
   },
   created() {
      axios.get('/api/posts/' + this.slug)
         .then(response => {
            if (response.data.success) {
               this.objPost = [];
            }
            this.objPost = response.data.results
         })
   }
}
</script>

<style>

</style>
