const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  roles: state => state.user.roles,
  weight: state => state.user.weight,
  age: state => state.user.age,
  stature: state => state.user.stature,
  position: state => state.user.position,
  sex: state => state.user.sex,
  id: state => state.user.id,
  football_tream: state => state.user.football_tream,
}
export default getters
