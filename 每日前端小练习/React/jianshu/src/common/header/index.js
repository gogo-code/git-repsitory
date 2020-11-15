import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  SearchInfoItem,
} from './style';
class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      page,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage,
      totalPage,
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    // ajax没有获取值时key值有问题
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const {
      focused,
      list,
      handleInputFocus,
      handleInputBlur
    } = this.props
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
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={()=>handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={
                focused ? 'focused iconfont zoom' : 'iconfont zoom'
              }
            >
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
    );
  }
}

// 无状态组件

// 将组件state数据映射到props
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // focused:state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  };
};
//将组件的dispatch方法映射到props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size===0)&&dispatch(actionCreators.getList())
      // 等价于if(list.size===0){
      //   dispatch(actionCreators.getList());
      // }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      // 第一次transform的值为空,匹配所有数字
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, ' ');
      // console.log(originAngle);
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
