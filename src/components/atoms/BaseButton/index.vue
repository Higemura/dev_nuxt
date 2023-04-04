<template>
  <button class="BaseButton">
    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts">
// import { defineComponent, ref } from "#imports"

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'DefaultText'
    }
  },
  setup(props) {
    const text = ref(props.text)
    return { text }
  }
})
</script>

<style scoped>
.BaseButton {
  color: red
}
</style>