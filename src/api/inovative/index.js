// 菜单显示隐藏
import request from "../../utils/request.js"
export function getCaseData(data) {
  return request({
    url: `/manage/case/caseData`,
    method: 'post',
    data: data
  })
}
