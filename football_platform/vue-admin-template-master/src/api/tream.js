import request from '@/utils/request'


//获取球队比赛信息
export function matchinfo(token){
    return request({
        url:'/api/match/',
        method:'get',
        params:{ token }
    })
}

//获取单个球队信息
export function treaminfo(token,football_tream){
    return request({
        url:'/api/treaminfo/' + football_tream + '/',
        method:'get',
        params:{ token }
    })
}

//获取所有球队信息
export function AllTreamInfo(token){
    return request({
        url:'/api/treams/',
        method:'get',
        params:{ token }
    })
}

//获取比赛过程传球信息
export function matchprocess(token){
    return request({
        url:'/api/match_process',
        method:'get',
        params:{ token }
    })
}

//获取单个比赛信息
export function matchdata(token,match_id){
    return request({
        url:'/api/match_data/' + match_id + '/',
        method:'get',
        params: { token }
    })
}

//获取单场比赛球员数据
export function playerdata(token,match_id){
    return request({
        url:'/api/player_data/' + match_id + '/',
        method:'get',
        params: { token }
    })
}

//上传比赛文件
export function uploadtreamFile(data){
    return request({
      url:'/api/tream/files',
      method: 'post',
      data
    })
}

export function uploadplayerFile(data){
    return request({
        url:'/api/player/files',
        method: 'post',
        data
    })
}

//创建球队
export function createtream(data){
    return request({
        url:'/api/tream_create/',
        method:'post',
        data
    })
}

//上传队徽
export function uploademblem(data){
    return request({
        url:'/api/tream_emblem/',
        method:'post',
        data
    })
}

