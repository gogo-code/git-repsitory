/* eslint-disable import/no-anonymous-default-export */
import * as constants from './constants';
const defaultState = {
  focused: false,
};
// 导出纯函数
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true,
    };
  }
  if (action.type === constants.SEARCH_BLUR) {
    return {
      focused: false,
    };
  }
  return state;
};
