/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
  focused:false

};
// 导出纯函数
export default (state = defaultState, action) => {
  if(action.type==='search_focus'){
    return {
      focused:true
    }
  }
  if(action.type==='search_blur'){
    return {
      focused:false
    }
  }
  return state;
};
