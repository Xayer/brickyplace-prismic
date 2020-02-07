<template>
  <section v-if="document">
    <div class="content-block">
      <h1 v-text="$prismic.asText(document.data.title)" class="title" />
    </div>
    <div v-for="(slice, sliceIndex) in document.data.body" :key="`${slice.slice_type}_${sliceIndex}`" class="content-block">
      <template v-if="slice.slice_type === 'image-block'">
        <ImageBlock v-if="slice.primary.image" :url="slice.primary.image.url" :alt="slice.primary.image.alt" />
      </template>
      <template v-else-if="slice.slice_type === 'text'">
        <Paragraph :text="slice.primary.text" />
      </template>
      <template v-else>
        <pre>{{ slice }}</pre>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageBlock from '~/components/atoms/image.vue'
import Paragraph from '~/components/atoms/paragraph.vue'
@Component({
	async asyncData ({ params, error } : { params: any, error: any }) {
		const { $prismic } = Vue.prototype.$nuxt
		const document = await $prismic.api.getByUID('blog_post', params.uid)
		if (document) {
			return { document, hello: 'hi!' }
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	components: {
		ImageBlock,
		Paragraph
	}
})
export default class singleArticle extends Vue {
	hello!: any;
}
</script>
<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
