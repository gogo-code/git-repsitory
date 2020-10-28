import {createStore} from 'redux'
import reducer from './reducer'
// 创建管理员
const store=createStore(reducer);
export default store;