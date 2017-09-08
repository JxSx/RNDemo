/**
 *
 * @param category
 */
import {request} from "./request";


//https://news-at.zhihu.com/api/4/news/latest
export function requestLatestNews() {
  return request('https://news-at.zhihu.com/api/4/news/latest', 'GET')
};
