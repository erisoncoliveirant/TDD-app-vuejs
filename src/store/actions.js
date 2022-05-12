import api from '@/api'

export default {
  async SEARCH_USER ({ commit }, { username }) {
    try {
      const user = await api.searchUser(username)
      commit('SET_USER', user)
    } catch (error) {
      window.console.error(new Error(error))
    }
  }
}
