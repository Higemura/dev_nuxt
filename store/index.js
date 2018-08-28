import Vuex from 'vuex'
import Cookies from 'universal-cookie'

// ↓_id.vueのaxios部分をstoreに登録する場合の記述
const store = () => new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user: (state) => state.user
  },
  mutations: {
    saveUser(state, { user }) {
      state.user = user
    }
  },
  actions: {
    // ↓nuxtServerInitを使えば middleware/auth.js は必要ない（しかしサイト全体に影響するため、利用するのに会員登録必須のような場合に使う。）
    // nuxtServerInit({ commit }, { req, route, redirect }) {
    //   if (!process.server || ['/login'].includes(route.path)) {
    //     return
    //   }
    //   const cookies = new Cookies(req.headers.cookie)
    //   const credential = cookies.get('credential')
    //   if (credential) {
    //     // Cookie を Vuex Store にコミットする処理など...
    //     // 例えば commit('')
    //   } else {
    //     return redirect('/login')
    //   }
    // },

    async getUser({ commit }, { id }) {
      try {
        const user = await this.$axios.$get(
          `https://api.github.com/users/${id}`
        )
        commit('saveUser', { user })
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
})
export default store


export const state = () => ({
  isLoading: false
})
export const mutations = {
  setIsLoading (state, isLoading) {
    state.isLoading = isLoading
  }
}
