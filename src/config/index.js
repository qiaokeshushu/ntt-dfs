// 环境配置封装
// 没有注入就是用生产的保底，如果忘记了发到线上也不会影响生产数据
console.log('import.meta.env.', import.meta.env)
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/v1',
    // mockApi: 'https://www.fastmock.site/mock/dd3771e520db5239bca8478273a5947d/api'
    mockApi: 'http://vue.ruoyi.vip/prod-api'

    // http://vue.ruoyi.vip/prod-api
  },
  test: {
    baseApi: '//test.future.com/api',
    mockApi: 'https://www.fastmock.site/mock/527b88f8a8bd29d65b8a0105f1945076/api'
  },
  prod: {
    baseApi: '/server-api',
    mockApi: 'https://www.fastmock.site/mock/527b88f8a8bd29d65b8a0105f1945076/api'
  }
}
export default {
  env,
  mock: false,
  nameSpace: 'manager',
  ...EnvConfig[env]
}
