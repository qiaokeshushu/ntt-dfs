
import { defineStore } from 'pinia'
const useUserStore = defineStore('user', {
  state: () => ({
     userInfo: {
      name:"超级管理员"
    },
    token: '111',
  }),
  action: {
    getInfo() {
      console.log('userInfo');
    }
  }
 })
export default useUserStore