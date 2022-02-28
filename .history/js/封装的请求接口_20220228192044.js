/*
 * @Author: your name
 * @Date: 2022-02-28 19:08:39
 * @LastEditTime: 2022-02-28 19:20:05
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /fe_tools/js/封装的请求接口.js
 */
const awaitWrap = promise => {
    return promise.then(data => [null, data])
    .catch(err => [err, null])
}