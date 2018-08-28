<template>
  <div>
    <!-- <h1>{{ id }}</h1> -->
    <h2>{{ user.name }}</h2>
    <img :src="user.avatar_url">
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

// ↓storeに登録する前のコード
// export default {
//   async asyncData({ params, app }) {
//     const { id } = params;
//     const user = await app.$axios.$get(
//       `https://api.github.com/users/${id}`
//     )
//     return { user }
//   }
// };

export default {
  async asyncData({ params, store }) {
    const { id } = params;
    await store.dispatch('getUser', {id})
    return {}
  },
  computed: {
    ...mapGetters(['users'])
  }
};
</script>
