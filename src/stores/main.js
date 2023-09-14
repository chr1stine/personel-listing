import { createStore } from 'vuex'

const apiUrl = 'https://jsonplaceholder.typicode.com'

const store = createStore({
  state() {
    return {
      users: [],
      searchString: '',
      selectedId: null,
      user: null
    }
  },
  mutations: {
    newUsers(state, payload) {
      state.users = payload
    },
    newSearchString(state, payload) {
      state.searchString = payload
    },
    updateSelectedId(state, payload) {
      state.selectedId = payload
    },
    updateUser(state, payload) {
      state.user = payload
    },
    newId(state, payload) {
      state.selectedId = payload
    }
  },
  actions: {
    selectNewId({ commit }, { id }) {
      commit('newId', id)
    },
    updateSearchString({ commit }, searchString) {
      commit('newSearchString', searchString)
    },
    async loadUsers({ commit }) {
      return new Promise((resolve, reject) => {
        // fetch(apiUrl + '/users')
        fetch(apiUrl + '/users') // check behaviout on error
          .then((res) => {
            if (!res.ok) throw Error(res.statusText)
            res.json().then((newUsers) => {
              commit('newUsers', newUsers)
              setTimeout(resolve, 1500) // check long preloader
              // resolve()
            })
          })
          .catch((err) => {
            setTimeout(() => reject(err), 1500) // check long preloader
            // reject(err)
          })
      })
    },
    async loadUser({ commit }, selectedId) {
      return new Promise((resolve, reject) => {
        commit('updateSelectedId', selectedId)
        // fetch(apiUrl + '/userss/' + selectedId) // check behaviout on error
        fetch(apiUrl + '/users/' + selectedId)
          .then((res) => {
            if (!res.ok) throw Error(res.statusText)
            res.json().then((newUser) => {
              commit('updateUser', newUser)
              setTimeout(resolve, 1500) // check long preloader
              // resolve()
            })
          })
          .catch((err) => {
            setTimeout(() => reject(err), 1500) // check long preloader
            // reject(err)
          })
      })
    }
  },
  getters: {
    getRelevantUsers(state) {
      return state.users.filter((u) =>
        u.name.toLowerCase().includes(state.searchString.toLowerCase())
      )
    }
  }
})

export default store
