import {resquestz} from './request'

//获取首页接口数据
export function getHomeMultidata() {
  return resquestz({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return resquestz({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}