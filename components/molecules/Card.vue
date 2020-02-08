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
      <a :href="link.url" v-text="$prismic.asText(label)" class="btn" />
    </div>
  </article>
</template>
<script lang="ts">
import { ParagraphInterface } from '../atoms/Paragraph.vue'
import { ImageInterface } from '../atoms/Image.vue'
import { Component, Prop } from 'vue-property-decorator'
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

@Component({})
export default class Card extends Vue {
	@Prop() title!: Array<ParagraphInterface>
	@Prop() description!: Array<ParagraphInterface>
	@Prop() image!: ImageInterface
	@Prop() link!: ExternalLinkInterface
	@Prop() label!: Array<ParagraphInterface>
	get formattedTitle () {
		return this.title[0].text
	}
	get teaserImage () {
		return `${this.image.url}&w=${this.image.teaser.dimensions.width}`
	}
}
</script>
<style lang="scss" scoped>
.btn {
	padding: .5rem 1rem;
	color: white;
	font-size: 1.25rem;
	line-height: 1.25rem;
	box-sizing: border-box;
	border-color: white;
	border-radius: .5rem;
	text-decoration: none;
	margin: 0;
	background-color: #1862c6;
	transition: all .25s;
	&:hover {
		background-color: transparentize(#1862c6, 0.25);
	}
	border: 2px solid transparent;
	&.outline {
		color: #1862c6;
		border-color: #1862c6;
		background-color: transparent;
		&:hover {
			color: transparentize(#1862c6, 0.25);
			border-color: transparentize(#1862c6, 0.25);
		}
	}
}

article {
	margin-top: 1rem;
	background-color: white;
	display: flex;
	max-width: 100%;
	padding: 1rem;
	box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
	border: 1px solid #edf2f9;
	border-radius: .5rem;
	align-items: flex-start;
	flex-direction: row;
	align-items: center;
	.prepend, .append {
		flex-shrink: 1;
	img {
		object-fit: cover;
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
