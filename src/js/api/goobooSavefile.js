import request from '../utils/request'

export function getData() {
    return request({
        url: '/data/get',
        method: 'get',
    })
}

// 保存用户数据
export function saveData(data) {
    return request({
        url: '/data/save',
        method: 'post',
        data
    })
}
