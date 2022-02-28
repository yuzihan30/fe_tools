/*
 * @Author: your name
 * @Date: 2022-02-28 19:08:39
 * @LastEditTime: 2022-02-28 19:22:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /fe_tools/js/封装的请求接口.js
 */
// promise可以是使用axios做的接口请求
const awaitWrap = promise => {
    return promise.then(data => [null, data])
    .catch(err => [err, null])
}
const awaitWrap = promise => promise.then(data => [null, data])
    .catch(err => [err, null])