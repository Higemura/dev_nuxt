<template>
  <button class="BaseButton">
    <slot>{{ text }}</slot>
  </button>
</template>



<script setup lang="ts">
import { ref } from "vue"
const props = withDefaults(defineProps(),{
  text: {
    type: String,
    default: 'DefaultText'
  }
})

const text = ref(props.text)
</script>

<style scoped>
.BaseButton {
  color: red
}
</style>