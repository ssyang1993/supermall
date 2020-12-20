//会合并
module.exports = {
  //配置别名
  configureWebpack: {
    //解决路径相关的问题
    resolve: {
      //extensions: []   可以让某些文件不用写后缀名，默认配置好了，不用再配置了
      alias: {
        //"@": 'src' 内部已经配置好的别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}