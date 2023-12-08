// 菜单显示隐藏
import request ,{ post,get } from "@/utils/request.js"
export function getCaseData(data) {
  return get('/manage/case/caseData',data,{responseType:"blod"})
}
export function getCaselist(data) {
  return request({
    url: '/manage/case/caseList',
    method: 'post',
    data,
    responseType:"blod"
  })
}

