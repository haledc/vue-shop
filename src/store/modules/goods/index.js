import api from '../../../assets/api'

const state = {
  goodsList: []
}
const getters = {
  goodsList: state => state.goodsList
}
const mutations = {
  setGoodsList(state, { list, flag }) {
    if (flag) {
      state.goodsList = state.goodsList.concat(list)
    } else {
      state.goodsList = list
    }
  }
}
const actions = {
  getGoodsList({ commit }, { page, pageSize, sort, priceLevel, flag }) {
    api.getGoodsList(page, pageSize, sort, priceLevel)
      .then(res => {
        const { data } = res
        if (data.success) {
          commit('setGoodsList', { list: data.data.list, flag })
        }
      })
  },
  addCart({ commit }, productId) {
    return api.addCart(productId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
