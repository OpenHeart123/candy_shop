/*
  ajax请求函数模块
*/
const axios = require('axios');

export default function ajax(url, data = {}, type = "GET") {

  return new Promise(function (resolve, reject) {
    let promise;

    if (type === 'GET') {
      let dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      });
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + '?' + dataStr;
      }
      //发送GET请求
      promise.get(url);

    } else if (type === 'POST') {
      promise.post(url, data);
    }

    promise.then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    })


  })
}
