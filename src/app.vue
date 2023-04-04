<template>
  <div>
    aaa
    {# <BaseButton1>{{ text1 }}</BaseButton1> #}
    <BaseButton2>{{ text2 }}</BaseButton2>
    <BaseButton3>{{ text3 }}</BaseButton3>
    bbb
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
// import BaseButton1 from '~/components/atoms/BaseButton/index.vue'
import BaseButton2 from '~/components/atoms/BaseButton2/index.vue'
import BaseButton3 from '~/components/atoms/BaseButton3/index.vue'

const text1 = ref('BaseButton1')
const text2 = ref('BaseButton2')
const text3 = ref('BaseButton3')
</script>