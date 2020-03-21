<template>
  <article>
    <div class="prepend">
      <img :src="teaserImage" alt="">
    </div>
    <div class="content">
      <h1 v-text="formattedTitle" class="title" />
      <span v-html="$prismic.asHtml(description)" class="label" />
    </div>
    <div class="append">
      <Button :href="link.url" :title="$prismic.asText(label)" />
    </div>
  </article>
</template>
<script lang="ts">
import { ParagraphInterface } from '../atoms/Paragraph.vue'
import { ImageInterface } from '../atoms/Image.vue'
import { Component, Prop } from 'vue-property-decorator'
import Button from '../atoms/Button.vue'
import Vue from 'vue'

export interface CardInterface {
	title: Array<ParagraphInterface>;
	description: Array<ParagraphInterface>;
	image: ImageInterface;
	link: ExternalLinkInterface;
	label: Array<ParagraphInterface>;
}

export interface ExternalLinkInterface {
	link_type: string;
	name: string;
	kind: string;
	url: string;
	size: string;
}

@Component({
	components: {
		Button
	}
})
export default class Card extends Vue {
	@Prop() title!: Array<ParagraphInterface>
	@Prop() description!: Array<ParagraphInterface>
	@Prop() image!: ImageInterface
	@Prop() link!: ExternalLinkInterface
	@Prop() label!: Array<ParagraphInterface>
	get formattedTitle () {
		return this.title ? this.title[0].text : ''
	}
	get teaserImage () {
		return `${this.image.url}&w=${this.image.teaser.dimensions.width}`
	}
}
</script>
<style lang="scss" scoped>
article {
	margin-top: 1rem;
	background-color: white;
	display: flex;
	max-width: 100%;
	padding: 1rem;
	box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
	border: 1px solid #edf2f9;
	align-items: flex-start;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
	.prepend, .append {
		flex-shrink: 1;
	img {
		object-fit: cover;
		max-width: 100%;
		@media screen and (min-width: 768px) {
			flex-direction: row;
		}
	}
	border-radius: .5rem;
}
	.content {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		align-items: flex-start;
		padding: {
			left: 1rem;
			right: 1rem;
		}
		.label {
			color: #666;
		}
		.title {
			margin: 0;
			padding: 0;
			text-transform: uppercase;
			font-size: 1.5rem;
			}
		}
		&.lg{
			padding: 2rem;
		}
		&.special {
		background-color: #1862c6;
		color: white;
		.label {
		color: darken(white, 20);
		}
	}
}
</style>
