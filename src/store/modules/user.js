
import { defineStore } from 'pinia'
const useUserStore = defineStore('user', {
  state: () => ({
     userInfo: {
      name:"全体起立"
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