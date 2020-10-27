import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 写在constructor里可以提高性能,这个this防止undefined
    this.handleClick = this.handleClick.bind(this);
  }
  // 子组件如果需要更新,避免子组件无畏的render
  shouldComponentUpdate(nextProps,nextState){
    // 如果接收到的content发生变化
    if(nextProps.content!==this.props.content){
      return true;
    }
    return false;
  }
  render() {
    //  const content={this.props}
    // console.log(this.props)
    const { content,test } = this.props;
    return <div onClick={this.handleClick}>{content}-{test}</div>;
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index)
  }
}
// 对属性进行校验,isRequired要求父组件必须向子组件传值
TodoItem.propTypes={
  test:PropTypes.string.isRequired,
  content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  deleteItem:PropTypes.func,
  index:PropTypes.number
}
// 默认属性
TodoItem.defaultProps={
  test:'hello world'
}
export default TodoItem;
