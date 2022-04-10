<template>
  <section class="index">
    <card
      v-for="(post, index) in posts"
      :id="post.sys.id"
      :key="index"
      :title="post.fields.title"
      :date="post.sys.updatedAt"      
    />
  </section>
</template>
 <script>
import { ref } from '@nuxtjs/composition-api'
import Card from '~/components/card.vue'
import { createClient } from '~/plugins/contentful'
export default {
  components: {
    Card
  },
  setup() {
    const client = createClient()
    const posts = ref()
    const fetchPosts = async () => {
      const res = await client.getEntries(process.env.NUXT_ENV_CONTENTFUL_POST_TYPE)
      posts.value = res.items
    }
    fetchPosts()

    return {posts}
  }
}
</script>
