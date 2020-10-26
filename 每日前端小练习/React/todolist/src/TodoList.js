import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    };
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleItemDelete=this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="Area">输入内容</label>
          {/* 下面是一个input框 */}
          <input
            id="Area"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
  getTodoItem(){
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem  content={item} index={index} deleteItem={this.handleItemDelete}/>
        </div>
      );
      //  <li
      // key={index}
      // onClick={this.handleItemDelete.bind(this,index)}
      // dangerouslySetInnerHTML={{__html:item}}
      // ></li>
    })
  }
  handleInputChange(e) {
    // this.state.inputValue=e.target.value;
    const value=e.target.value
    this.setState(()=>({
      
        inputValue: value,
      
    }))
    
    console.log(e.target.value);
  }
  handleBtnClick() {
    this.setState((prevState)=>({
      
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      
    }));
  }
  handleItemDelete(index) {
    // imutable
    //state不允许我们做任何改变，因为一旦改变了会影响后面的性能优化
    // 把数组做一份拷贝
    // const list = [...this.state.list];
    // list.splice(index, 1);
    this.setState(
      (prevState)=>{
        const list=[...prevState.list]
        list.splice(index,1)
        return {list}
      }
    );
  }
}
export default TodoList;
