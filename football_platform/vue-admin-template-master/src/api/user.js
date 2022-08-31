import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login/',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/info/',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/acl/index/logout',
    method: 'post'
  })
}

export function createUser(data){
  return request({
    url:'/api/users_create/',
    method: 'post',
    data
  })
}

//上传图片
export function uploadImage(data){
  return request({
    url:'/api/avatar/',
    method: 'post',
    data
  })
}

//修改用户信息
export function updateInfo(data,id){
  return request({
    url:'/api/user_update/' + id + '/',
    method: 'put',
    data,
  })
}

//获取所有用户信息
export function AllUserInfo(){
  return request({
    url:'/api/'
  })
}

