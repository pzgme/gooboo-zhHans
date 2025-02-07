import request from '../utils/request'

export function getData() {
    return request({
        method: 'get',
    })
}

// 保存用户数据
export function saveData(data) {
    return request({
        method: 'post',
        data
    })
}
