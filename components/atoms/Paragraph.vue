<template>
  <div v-html="$prismic.asHtml(text)" class="text-slice" />
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

@Component({})
export default class Paragraph extends Vue {
	@Prop() text!: string
}
</script>
