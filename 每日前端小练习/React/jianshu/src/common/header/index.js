import React from 'react';
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
const getListArea = (show) => {
  if(show) {
    return ( <SearchInfo>
      <SearchInfoTitle>
      热门搜索
      <SearchInfoSwitch>
      换一批
      </SearchInfoSwitch>
      </SearchInfoTitle>
      <div>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
      </div>
    </SearchInfo>)
  }else {
    return null
  }
}
// 无状态组件
const Header=(props)=>{
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
          in={props.focused}
          timeout={200}
          classNames="slide"
        >
          <NavSearch
            className={props.focused ? 'focused' : ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          ></NavSearch>
        </CSSTransition>
        <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
          &#xe614;
        </i>
        {getListArea(props.focused)}
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



// 将组件state数据映射到props
const mapStateToProps=(state)=>{
  return {
    focused:state.getIn(['header','focused'])
    // focused:state.get('header').get('focused')
  }
}
//将组件的dispatch方法映射到props
const mapDispatchToProps =(dispatch)=>{
  return {
    handleInputFocus(){

      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
