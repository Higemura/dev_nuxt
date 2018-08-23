<template>
  <div>
    <h1>{{ id }}</h1>
    <!-- <img :src="user.avatar_url"> -->
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    const { id } = params;
    // const user = await app.$axios.$get(
    //   `https://api.github.com/users/${id}`
    // )
    return { id };
  }
};
</script>
