<template>
  <img :src="url" :alt="alt">
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

@Component({})
export default class ImageBlock extends Vue {
	@Prop() url!: string
	@Prop() alt!: string
}
</script>
<style lang="scss" scoped>
	img {
		max-width: 100%;
		height: auto;
		margin: 1.5rem auto;
		box-shadow: 0px 0px 2px 0px #222;
	}
</style>
