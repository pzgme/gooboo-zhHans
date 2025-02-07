import request from '../utils/request'

export function getData() {
    return request({
        url: '/gooboo/get',
        method: 'get',
    })
}

// 保存用户数据
export function saveData(data) {
    return request({
        url: '/gooboo/save',
        method: 'post',
        data
    })
}
