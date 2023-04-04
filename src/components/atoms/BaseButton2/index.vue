<template>
  <button class="BaseButton">
    <slot>{{ text }}</slot>
  </button>
</template>



<script setup lang="ts">
import { ref } from "vue"
interface BaseButton2Props {
  text: string
}
const props = withDefaults(defineProps<BaseButton2Props>(), {
  text: 'Default2'
})

const text = ref(props.text)
</script>

<style scoped>
.BaseButton {
  color: red
}
</style>