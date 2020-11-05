import {ADD_TODO_ITEM,DELETE_TODO_ITEM,CHANGE_INPUT_VALUE} from './actionTypes'

// 创建管理本,state为笔记本的数据
//纯函数指给定固定的输入，一定会有固定的输出（不能有异步操作或者时间操作），而且不会有任何副作用（对参数不修改）
const defaultState = {
  inputValue: '',
  list: [],
};
//reducer可以接受state，但是绝不能修改state
const reducer= (state = defaultState, action) => {
  if(action.type===CHANGE_INPUT_VALUE){
    const newState=JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value;
    return newState
  }
  if(action.type===ADD_TODO_ITEM){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  if(action.type===DELETE_TODO_ITEM){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  console.log(state,action)
  return state;
};
export default reducer
