import axios from 'axios'

//第一种方式: 三个参数 配置  成功 失败
export function request(config,success,failure) {
  //1.0创建axios实例
  const instance = axios.create({
    //基础地址
    baseURL: 'http://152.136.185.210:7878/api/m5',
    //超时时限 单位：毫秒
    timeout: 5000
  })

  instance(config)
    .then(res => {
      //成功传递
      success(res)
    })
    .catch(err => {
      //失败传递
      failure(err)
    })
}

//第二种方式: 只传递一个参数(对象)的方式
export function resquest2(config) {
  //1.0创建axios 实例
  const instance = axios.create({
    //基础地质
    baseURL: 'http://152.136.185.210:7878/api/m5',
    //超时时限 （毫秒）
    timeout: 5000
  })

  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}

//第三种方式：promise
export function resquest3(config) {
  //两个参数 成功 失败
  return new Promise((resolve,reject) => {
    //创建axios实例
    const instance = axios.create({
      //基础地址
      baseURL: 'http://152.136.185.210:7878/api/m5',
      //超时时限 毫秒
      timeout: 5000
    })

    //发送网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

//最后的解决方案 instance自带promise实例属性
export function resquestz(config) {
  //01.创建axios实例
  const instance = axios.create({
    //基础地址
    baseURL: 'http://152.136.185.210:7878/api/m5',
    //超时时限 毫秒
    timeout: 5000
  })
  //02.1请求拦截器
  instance.interceptors.request.use(config => {
    //console.log(config)
    // 02.1.1 config中的一些信息不符合服务器的要求

    // 02.1.2每次发送的网络请求时 ，希望在界面中显示图标

    // 02.1.3某些网络请求，需要携带信息（登陆）
    return config
  }, err => {
    //console.log(err)
  })

  //02.2响应拦截器
  instance.interceptors.response.use(res=> {
    //console.log(res)
    //真正要使用的是res.data
    return res.data
  }, err => {
    //console.log(err)
  })
  //03.发送网络请求  返回的是一个promise,其他地方可以直接通过then 调用
  return instance(config)
}