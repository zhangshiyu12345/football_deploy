import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    username: '',
    avatar: '',
    roles: [],
    age: 0,
    weight: 0,
    stature:0,
    position: '',
    sex:0,
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_WEIGHT: (state, weight) => {
    state.weight = weight
  },
  SET_AGE: (state, age) => {
    state.age = age
  },
  SET_STATURE: (state, stature) => {
    state.stature = stature
  },
  SET_POSITION: (state, position) => {
    state.position = position
  },
  SET_SEX: (state, sex) => {
    state.sex = sex
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        console.log(response)
        const { data } = response
        const token = data.access
        //console.log(token)
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, username, avatar, weight, stature, age, position, sex } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_USERNAME', username)
        commit('SET_AVATAR', avatar)
        commit('SET_WEIGHT', weight)
        commit('SET_STATURE', stature)
        commit('SET_AGE', age)
        commit('SET_POSITION', position)
        commit('SET_SEX',sex)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => { 
        //没有发送请求,直接退出
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      //logout(state.token).then(() => {
      //}).catch(error => {
      //  reject(error)
     // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}

