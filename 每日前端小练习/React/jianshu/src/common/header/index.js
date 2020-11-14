import React,{Component} from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

import {
  Addition,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style';
class Header extends Component {
  getListArea(){
    if(this.props.focused) {
      return ( <SearchInfo>
        <SearchInfoTitle>
        热门搜索
        <SearchInfoSwitch>
        换一批
        </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {
            this.props.list.map((item)=>{
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
          
        </div>
      </SearchInfo>)
    }else {
      return null
    }
  }
  render(){
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
          {this.getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="reg">
          <i className="iconfont">&#xe615;</i>写文章
        </Button>
        <Button className="writting">注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
}

// 无状态组件




// 将组件state数据映射到props
const mapStateToProps=(state)=>{
  return {
    focused:state.getIn(['header','focused']),
    // focused:state.get('header').get('focused')
    list:state.getIn(['header','list'])
  }
}
//将组件的dispatch方法映射到props
const mapDispatchToProps =(dispatch)=>{
  return {
    handleInputFocus(){
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
