
<template>
  <article class="card">
    <nuxt-link
      :to="`/blog/${id}`"
      class="wrapper"
    >
    <!-- :to="{ name: 'blog-slug', params: {
          sys: id
      }}" -->
      <h1 class="card_title">{{ title }}</h1>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>