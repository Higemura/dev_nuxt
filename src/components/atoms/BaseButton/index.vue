<template>
  <button class="BaseButton">
    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts">
// #importsを読み込むとstorybook上で他のコンポーネントを表示していてもエラーが出るので、コメントアウトしています。
// import { defineComponent, ref } from "#imports"

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'Default1'
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