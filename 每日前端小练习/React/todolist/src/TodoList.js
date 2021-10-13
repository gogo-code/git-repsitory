import React, { Component, Fragment } from "react";
import "./style.css";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  getTitle = (title) => {
    let word = title.split("");
    return (
      <div ref={(ele) => (this.div = ele)}>
        {word.map((val, i) => (
          <span
            style={{
              opacity: 0,
              // transition: "opacity 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.05s,transform 0.8s cubic-bezier(0.55, 0.09, 0.68, 0.53)",
              display: "inline-block",
              transform: "translate(26px,26px)",
            }}
          >
            {val}
          </span>
        ))}
      </div>
    );
  };

  show = (params) => {
    let childList = this.div.childNodes;
    console.log(this.div.childNodes);
    for (let i = 0; i < childList.length; i++) {
      // let delay = (i + 1) * 0.05;
      // childList[i].style.transitionDelay = `${delay}s`;
      // childList[i].style.transform = `translate(0px,0px)`;
      // childList[i].style.opacity = 1;
      let translateCount = 26;
      let opacityCount = 0;
      let timeHandle = null;
      setTimeout(() => {
        
      }, i*200);
      this.animation(i, childList, translateCount, timeHandle, opacityCount);
    }
  };

  animation = (i, childList, translateCount, timeHandle, opacityCount) => {
    let _opacityCount = opacityCount;
    let _translateCount = translateCount;
    if (_opacityCount >= 1) {
      childList[i].style.transform = `translate(0px,0px)`;
      childList[i].style.opacity = 1;
      return;
    }
    _opacityCount += 0.016*(4-i);
    _translateCount -= 0.44*(4-i);
    childList[
      i
    ].style.transform = `translate(${_translateCount}px,${_translateCount}px)`;
    childList[i].style.opacity = _opacityCount;
    setTimeout(() => {
      this.animation(i, childList, _translateCount, timeHandle, _opacityCount);
    }, 16.7);
  };

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
            ref={(input) => {
              this.input = input;
            }}
          ></input>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul>

        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            height: 26,
            overflow: "hidden",
          }}
        >
          {this.getTitle("我是你爹")}
        </div>
        <button onClick={() => this.show(4)} style={{ marginTop: 10 }}>
          显示
        </button>
      </Fragment>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        </div>
      );
      //  <li
      // key={index}
      // onClick={this.handleItemDelete.bind(this,index)}
      // dangerouslySetInnerHTML={{__html:item}}
      // ></li>
    });
  }
  handleInputChange(e) {
    // this.state.inputValue=e.target.value;
    // const value=e.target.value
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value,
    }));

    console.log(e.target.value);
  }
  handleBtnClick() {
    // prevState相当于this.state
    this.setState(
      (prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: "",
      }),
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
  }
  handleItemDelete(index) {
    // imutable
    //state不允许我们做任何改变，因为一旦改变了会影响后面的性能优化
    // 把数组做一份拷贝
    // const list = [...this.state.list];
    // list.splice(index, 1);
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}
export default TodoList;
