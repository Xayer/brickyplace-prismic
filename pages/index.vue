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
import { ImageInterface } from '~/components/atoms/Image.vue'
import CallToAction from '~/components/molecules/CallToAction.vue'

export default {
	components: {
		CallToAction
	},
	async asyncData () {
		const { $prismic } = Vue.prototype.$nuxt
		const posts = await $prismic.api.query($prismic.predicates.at('document.type', 'blog_post'), { pageSize: 50 })

		return {
			posts: posts.results
		}
	},
	head: {
		title: 'Blog'
	},
	methods: {
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
