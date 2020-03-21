<template>
  <section v-if="document">
    <div class="content-block">
      <div class="content-header text-slice">
        <h1 v-text="$prismic.asText(document.data.title)" class="title" />
        <p v-text="$prismic.asText(document.data.description)" class="description" />
      </div>
    </div>
    <div v-for="(slice, sliceIndex) in document.data.body" :key="`${slice.slice_type}_${sliceIndex}`" class="content-block">
      <template v-if="slice.slice_type === 'image-block'">
        <ImageBlock v-if="slice.primary.image" :image="slice.primary.image" class="image-block" />
      </template>
      <template v-else-if="slice.slice_type === 'text'">
        <Paragraph :text="slice.primary.text" />
      </template>
      <template v-else-if="slice.slice_type === 'teaser'">
        <Card
          :image="slice.primary.teaser_image"
          :title="slice.primary.teaser_title"
          :description="slice.primary.teaser_description"
          :link="slice.primary.teaser_link"
          :label="slice.primary.teaser_label"
        />
      </template>
      <template v-else>
        <pre>{{ slice }}</pre>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageBlock from '~/components/atoms/Image.vue'
import Paragraph from '~/components/atoms/Paragraph.vue'
import Card from '~/components/molecules/Card.vue'
import CallToAction from '~/components/molecules/CallToAction.vue'
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
		Paragraph,
		Card,
		CallToAction
	}
})
export default class singleArticle extends Vue {
}
</script>
<style lang="scss" scoped>
	section {
		max-width: $content-max-width;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
	}
</style>
