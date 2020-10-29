// 创建管理本,state为笔记本的数据
const defaultState = {
  inputValue: '',
  list: [],
};
//reducer可以接受state，但是绝不能修改state
const reducer= (state = defaultState, action) => {
  if(action.type==='change_input_value'){
    const newState=JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value;
    return newState
  }
  if(action.type==='add_todo_item'){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  console.log(state,action)
  return state;
};
export default reducer
