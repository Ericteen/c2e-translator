const fetch = require('node-fetch');
const chalk = require('chalk')
const HttpsProxyAgent = require("https-proxy-agent");
const md5 = require('../utils/md5');
const colors = require('./colors');
// const write = require('../utils/writeResult');

const appID = "312ed475a3531518";
const key = "SEZyR6iaCdkHCuMvTD5CrsPZD2llDayQ";
const salt = (new Date()).getTime();
const query = '';

const translate = (query, from = 'EN', to = 'zh-CHS') => {
  const signString = appID + query + salt + key;
  const sign = md5(signString);

  async function getData (params) {
    const {query, sign, from, to , salt, appID} = params;
    const qu = encodeURIComponent(query);
    const result = await fetch(`http://openapi.youdao.com/api?q=${qu}&sign=${sign}&from=${from}&to=${to}&salt=${salt}&appKey=${appID}`, {
      agent: new HttpsProxyAgent('http://127.0.0.1:8888')
    })
    if (result.status !== 200) {
      throw new Error(result.statusText);
    }
    return await result.json();
  }

  async function handleData (params) {
    try {
      const data = await getData(params)
      if (data.errorCode === '0') {
        colors(data);
      } else {
        console.log(data.errorCode);
      }
    } catch (err) {
      console.error(chalk.red('[ERROR]'), 'Youdao API requested error.');
      console.error(err);
    }
  }

  handleData({
    query,
    sign,
    from,
    to,
    salt,
    appID
  })
}

module.exports = translate;
