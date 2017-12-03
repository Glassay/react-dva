/**
 * 2017-12-03 Jifeng Cheng
 */
// 处理异步请求

import qs from 'qs';
import request from '../utils/request';

export async function query(params) {
  return request(`/api/users?${qs.stringify(params)}`);
}

