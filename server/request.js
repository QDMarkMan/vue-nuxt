/*
 * @Author: etf
 * @Date: 2018-08-24 14:42:54
 * @Last Modified by: etf
 * @Last Modified time: 2018-08-27 11:14:20
 * 通用http模块
 */
import request from 'request'
export default class Request {
  /**
   * httpget请求
   * @param {*} url
   * @param {*} para
   * @returns {*} data
   */
  httpGet (url, para) {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error) {
          resolve(response)
        } else {
          reject(error)
        }
      })
    })
  }
  /**
   * http post 请求
   * @param {*} url
   * @param {*} para
   */
  async httpPost (url, para) {
    return new Promise((resolve, reject) => {
      request({
        url: url,
        method: "POST",
        json: true,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(para)
      }, (error, response, body) => {
        if (!error) {
          resolve(response)
        } else {
          reject(error)
        }
      })
    })
  }
}
