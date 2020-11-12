import React, { Component } from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  Addition,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Button,
  SearchWrapper,
} from './style';
class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     focused: false,
  //   };
  //   this.handleInputFocus = this.handleInputFocus.bind(this);
  //   this.handleInputBlur = this.handleInputBlur.bind(this);
  // }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>

          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>
              &#xe614;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">
            <i className="iconfont">&#xe615;</i>写文章
          </Button>
          <Button className="writting">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  handleInputFocus() {
    this.setState({
      focused: true,
    });
  }
  handleInputBlur() {
    this.setState({
      focused: false,
    });
  }
}
// 将组件state数据映射到props
const mapStateToProps=(state)=>{
  return {
    focused:state.focused
  }
}
//将组件的dispatch方法映射到props
const mapDispatchToProps =(dispatch)=>{
  return {
    handleInputFocus(){
      const action={
        type:'search_focus'
      };
      dispatch(action)
    },
    handleInputBlur(){
      const action={
        type:'search_blur'
      };
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
