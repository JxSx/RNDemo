/**
 *
 * @param category
 */
import {request} from "./request";

export function requestRandomData(category, page) {
  return request(`http://gank.io/api/data/${category}/10/${page}`, 'GET')
};
