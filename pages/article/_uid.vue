<template>
  <section>
    <div v-html="$prismic.asHtml(document.data.title)" />
  </section>
</template>

<script>
export default {
  async asyncData ({ params, $prismic, error }) {
    const document = await $prismic.api.getByUID('blog-post', params.uid)

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
