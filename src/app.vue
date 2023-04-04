<template>
  <div>
    aaaaa
    {{ text }}
    <BaseButton2>{{ text }}</BaseButton2>
    <BaseButton3>{{ text }}</BaseButton3>
    bbb
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import BaseButton2 from '~/components/atoms/BaseButton2/index.vue'
import BaseButton3 from '~/components/atoms/BaseButton3/index.vue'

const text = ref('Hello World')
</script>