<template>
  <section class="slug" v-if="article">
    <h1 class="slug_title">
      {{ article.fields.title }}
    </h1>
    <p class="slug_date">{{ article.sys.updatedAt }}</p>
    <div>
        {{ article.fields.body }}
    </div>
  </section>
</template>
<script>
import { ref, useRoute } from '@nuxtjs/composition-api'
import { createClient } from '~/plugins/contentful'
export default {
    transition: 'slide-right',
    props: {
    id: {
        type: String,
        default: ''
        }
    },
    setup() {
        const route = useRoute()
        const client = createClient()
        const article = ref()
        const fetchArticle = async () => {
            const res = await client.getEntry(route.value.params.slug) 
            article.value = res
        }
        fetchArticle()
        return {
            article
        }
    },
}
</script>