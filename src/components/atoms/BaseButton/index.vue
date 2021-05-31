<template>
  <button
    class="BaseButton"
    :class="[ colorClass ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    colorClass: {
      type: String,
      default: '',
    },
    label:  {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.BaseButton {
  background-color: #ccc;
  padding: 8px;
  border-radius: 4px;

  &._Primary {
    background-color: rgb(255, 190, 50);
    color: #fff;
  }
}
</style>
