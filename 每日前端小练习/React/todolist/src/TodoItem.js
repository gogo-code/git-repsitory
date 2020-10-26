import React, { Component } from 'react';
class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 写在constructor里可以提高性能,这个this防止undefined
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    //  const content={this.props}
    // console.log(this.props)
    const { content } = this.props;
    return <div onClick={this.handleClick}>{content}</div>;
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index)
  }
}
export default TodoItem;
