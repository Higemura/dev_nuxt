<template>
  <div class="markdown">
    <div v-html="hello"></div>
  </div>
</template>

<script>
  import hello from '~/components/_md/hello.md'

  export default {
    computed: {
      hello() {
        return hello
      }
    }
  }
</script>
