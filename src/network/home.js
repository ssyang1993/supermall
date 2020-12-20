import {resquestz} from './request'

//获取首页接口数据
export function getHomeMultidata() {
  return resquestz({
    url: '/home/multidata'
  })
}