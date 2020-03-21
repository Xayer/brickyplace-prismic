<template>
  <section class="articles">
    <CallToAction
      v-for="({ data, uid }) in posts"
      :key="uid"
      :title="$prismic.asText(data.title)"
      :description="$prismic.asText(data.description)"
      :image="TeaserImage(data['main-image'])"
    >
      <template #url>
        <nuxt-link :to="{ name: 'article-uid', params: { uid } }" class="button">
          Read post
        </nuxt-link>
      </template>
    </CallToAction>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageBlock, { ImageInterface } from '~/components/atoms/Image.vue'
import Paragraph from '~/components/atoms/Paragraph.vue'
import Card from '~/components/molecules/Card.vue'
import CallToAction from '~/components/molecules/CallToAction.vue'

@Component({
	async asyncData ({ $prismic } : { $prismic: any }) {
		const posts = await $prismic.api.query($prismic.predicates.at('document.type', 'blog_post'), { pageSize: 50 })

		return {
			posts: posts.results
		}
	},
	components: {
		ImageBlock,
		Paragraph,
		Card,
		CallToAction
	},
	head: {
		title: 'Blog'
	}
})
export default class singleArticle extends Vue {
	TeaserImage (image: ImageInterface) {
		return {
			...image,
			dimensions: {
				height: 256,
				width: 350
			}
		}
	}
}
</script>
<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    align-items: center;
	flex-direction: column;
	&.articles {
		max-width: 1300px;
		width: 100%;
		margin: 0 auto;
		background-color: #fff;
		border: 2px solid rgb(177, 177, 177);
		.call-to-action {
			background-color: transparent;
			text-align: left;
		}
	}
  }
</style>
