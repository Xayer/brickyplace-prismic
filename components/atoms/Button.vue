<template>
  <a v-text="title" target="_self" class="button" />
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Button extends Vue {
	@Prop() title!: string
}
</script>
<style lang="scss">
    .button {
        display: inline-block;
        padding: 1rem 2rem;
        margin: 0;
        background-color: $primary;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        border: 0;
        text-align: center;
        transition: background .25s ease-in-out,transform .15s ease;
    }
</style>
