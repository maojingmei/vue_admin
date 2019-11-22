import request from '@/utils/request'

export function queryMenu(data) {
  return request({
    url: '/menu',
    method: 'get',
    // params: data
  })
}