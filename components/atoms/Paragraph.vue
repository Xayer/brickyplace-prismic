<template>
  <div v-html="$prismic.asHtml(text)" class="text-slice" />
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

export interface ParagraphInterface {
    type: string;
    text: string;
    spans: Array<any>;
}

@Component({})
export default class Paragraph extends Vue {
	@Prop() text!: string
}
</script>
<style lang="scss">
.text-slice {
  align-self: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 765px;
}
</style>
