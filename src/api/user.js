import request from '@/utils/request'

export function queryUserList(data) {
  return request({
    url: '/users/list',
    method: 'get',
    // params: data
  })
}