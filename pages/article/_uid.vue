<template>
  <section>
    <div v-html="$prismic.asHtml(document.data.title)" />
    <div v-for="(slice, sliceIndex) in document.data.body" :key="`${slice.slice_type}_${sliceIndex}`" class="content">
      <template v-if="slice.slice_type === 'image-block'">
        <img v-if="slice.primary.image" :src="slice.primary.image.url" :alt="slice.primary.image.alt">
      </template>
      <template v-if="slice.slice_type === 'text'">
        <p v-html="$prismic.asHtml(slice.primary.text)" />
      </template>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, $prismic, error }) {
    const document = await $prismic.api.getByUID('blog_post', params.uid)

    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
