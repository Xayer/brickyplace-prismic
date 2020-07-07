<template>
  <img :src="imageUrl" :alt="image.alt">
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

export interface ImageInterface {
	dimensions: {
		width: number;
		height: number;
	},
	alt: string;
	copyright: string;
	url: string;
	medium: ImageInterface;
	teaser: ImageInterface;
}

@Component({})
export default class ImageBlock extends Vue {
	@Prop() image!: ImageInterface

	get imageUrl () {
		return `${this.image.url}&w=${this.image.dimensions.width}q=80`
	}
}
</script>
<style lang="scss" scoped>
	img {
		max-width: 100%;
		height: auto;
		box-shadow: 0px 0px 1px 0px #222;
	}
</style>
