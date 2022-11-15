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


//获取未读通知
export function getnotice(token){
  return request({
    url:'/api/notice/',
    method: 'get',
    params:{token}
  })
}

export function updatenotice(data,id){
  return request({
    url:'/api/notice/' + id + '/',
    method:'put',
    data
  })
}

export function deletenotice(id){
  return request({
    url:'/api/notice/delete/' + id + '/',
    method:'delete',
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

//上传文件
export function uploadFile(data){
  //发请求:axios发请求返回的是Promise对象
  return request({
    url:'/api/files/',
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
export function AllUserInfo(token){
  return request({
    url:'/api/users/',
    method: 'get',
    params: { token }
  })
}

//获取单个用户信息
export function UserInfo(token,username){
  return request({
    url:'/api/userinfo/' + username + '/',
    method: 'get',
    params:{token}
  })
}

//上传手机号
export function SendPhone(data){
  return request({
    url:'/api/sms/',
    method: 'post',
    data
  })
}


