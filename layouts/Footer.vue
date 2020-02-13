<template>
  <footer>
    <CallToAction
      :title="'Follow @BrickyPlace on Instagram'"
      :description="'Stay up to date with our latest creations on Instagram!'"
      :label="'Visit our Instagram'"
      :link="{ url: '//instagram.com/brickyplace' }"
      :image="InstagramTeaserImage()"
    />
  </footer>
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
export default class Layout extends Vue {
	InstagramTeaserImage () {
		return {
			url: 'https://images.prismic.io/brickyplace-blog/aa251e2f-e221-4d96-b164-2b5847e6f6db_86262197_562977127620761_3270037165433683968_n.jpg?auto=compress,format',
			dimensions: { height: 256 }
		}
	}
}
</script>
<style lang="scss">
	footer {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		background-color: rgb(242, 242, 242);
	}
</style>
