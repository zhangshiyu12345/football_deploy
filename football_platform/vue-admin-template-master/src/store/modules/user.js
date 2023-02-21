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
    id: '',
    football_tream: '',
    pass_football:0,
    hotshot:0,
    speed_num:0,
    join_time:0,
    sprint_distance:0,
    run_distance:0,
    heart_avg:0,
    sprint_num:0,
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
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_FOOTBALL_TREAM: (state, football_tream) => {
    state.football_tream = football_tream
  },
  SET_PASS_FOOTBALL: (state, pass_football) => {
    state.pass_football = pass_football
  },
  SET_HOTSHOT: (state, hotshot) => {
    state.hotshot = hotshot
  },
  SET_SPEED_NUM: (state, speed_num) => {
    state.speed_num = speed_num
  },
  SET_JOIN_TIME: (state, join_time) => {
    state.join_time = join_time
  },
  SET_SPRINT_DISTANCE: (state, sprint_distance) => {
    state.sprint_distance = sprint_distance
  },
  SET_RUN_DISTANCE: (state, run_distance) => {
    state.run_distance = run_distance
  },
  SET_SPRINT_NUM: (state, sprint_num) => {
    state.sprint_num = sprint_num
  },
  SET_HEART_AVG: (state, heart_avg) => {
    state.heart_avg = heart_avg
  },
  SET_PHONE: (state, phone) => {
    state.phone = phone
  },
  SET_PASSWORD: (state, password) => {
    state.password = password
  },
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
        const { data, avatar1 } = response
        console.log(avatar1)
        console.log(data)
        data['avatar'] = 'http://127.0.0.1:8000' + data['avatar']

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, username, avatar, weight, password, phone, stature, age, position, sex, id, football_tream,sprint_num, heart_avg, pass_football, hotshot, speed_num, join_time, sprint_distance, run_distance } = data

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
        commit('SET_ID',id)
        commit('SET_FOOTBALL_TREAM',football_tream)
        commit('SET_PASS_FOOTBALL',pass_football)
        commit('SET_HOTSHOT',hotshot)
        commit('SET_SPEED_NUM',speed_num)
        commit('SET_JOIN_TIME',join_time)
        commit('SET_SPRINT_DISTANCE',sprint_distance)
        commit('SET_RUN_DISTANCE',run_distance)
        commit('SET_SPRINT_NUM',sprint_num)
        commit('SET_HEART_AVG',heart_avg)
        commit('SET_PASSWORD',password)
        commit('SET_PHONE',phone)
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