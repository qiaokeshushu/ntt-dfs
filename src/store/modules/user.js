
import { defineStore } from 'pinia'
 const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
    token: '111',
  }),
  action: {
    getInfo() {
      console.log('userInfo');
    }
  }
 })
export default useUserStore