// const baseURL = 'https://yili-music-1479251-1308655658.ap-shanghai.run.tcloudbase.com'

const baseURL = 'http://localhost:8080'

export const get = (uri: string) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + uri,
      method: 'GET',
      success: (res) => {
        //handleHttpError(res,reject)
        resolve(res.data)
      },
      fail: reject,
      complete: ()=> {
        wx.hideLoading()
      }
    })
  })
}

// const handleHttpError = (response, reject) => {
//   if (response.statusCode != 200) {
//     return reject("请求异常")
//   }
// }