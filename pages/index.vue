<template>
  <div>
    <section class="blog-home-section">
      <div class="blog-home-posts-wrapper">
        <div
          v-for="({ data, uid }) in posts"
          :key="uid"
          class="blog-home-post-wrapper"
        >
          <article>
            <p class="blog-home-post-title">
              {{ $prismic.asText(data.title) }}
            </p>
            <p v-text="$prismic.asText(data.description)" class="blog-home-post-excerpt" />
            <div class="blog-home-post-button-wrapper">
              {{ uid }}
              <nuxt-link :to="{ name: 'article-uid', params: { uid } }" class="a-button">
                Read post
              </nuxt-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ImageBlock from '~/components/atoms/Image.vue'
import Paragraph from '~/components/atoms/Paragraph.vue'
import Card from '~/components/molecules/Card.vue'
import CallToAction from '~/components/molecules/CallToAction.vue'

@Component({
	async asyncData ({ $prismic }) {
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

}
</script>
