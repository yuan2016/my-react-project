import fetch from './fetch'

//首页
export function getMain () {
  return fetch({
    url: '/api/test',
    method: 'post'
  })
}