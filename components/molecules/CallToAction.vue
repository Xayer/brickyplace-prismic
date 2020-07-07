<template>
  <div class="call-to-action">
    <slot>
      <img :src="teaserImage" :alt="title">
      <div>
        <h1 v-text="title" />
        <p v-text="description" />
        <slot name="url">
          <Button v-if="link" :href="link.url" :title="label" />
        </slot>
      </div>
    </slot>
  </div>
</template>
<script lang="ts">
import { ParagraphInterface } from '~/components/atoms/Paragraph.vue'
import { ImageInterface } from '~/components/atoms/Image.vue'
import { Prop, Component, Vue } from 'vue-property-decorator'
import { ExternalLinkInterface } from './Card.vue'
import Button from '~/components/atoms/Button.vue'

@Component({
	components: {
		Button
	}
})
export default class CallToAction extends Vue {
	@Prop({ required: false }) title!: string
	@Prop({ required: false }) description!: string
	@Prop({ required: false }) image!: ImageInterface;
	@Prop({ required: false }) link!: ExternalLinkInterface
	@Prop({ required: false }) label!:string;
	get teaserImage () {
		return this.image && this.image.url ? `${this.image.url}&h=${this.image.dimensions.height}&w=${this.image.dimensions.width}` : ''
	}
}
</script>
<style lang="scss">
    .call-to-action {
		width: 100%;
		max-width: 1300px;
		display: flex;
		min-height: 256px;
		flex-direction: column;
        background: #f2f2f2;
        color: #32373c;
		text-align: center;
		justify-content: center;
		align-items: center;
		@media screen and (min-width: 768px) {
			flex-direction: row;
		}
		img {
			width: auto;
			max-width: 100%;
			height: auto;
			display: flex;
			@media screen and (min-width: 768px) {
				&, div {
					display: flex;

				}
			}
		}
		div {
			padding: 1rem 1.5rem;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex-grow: 1;
			flex: 0 0 50%;
		}
        h2, p {
            margin-bottom: 15px;
            padding: 0;
        }
    }
</style>
