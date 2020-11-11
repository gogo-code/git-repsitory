import React from 'react';
import ReactDOM from 'react-dom';
// 引入全局样式
import {GlobalStyle} from './style'
import {GlobalIconFont} from './statics/iconfont/iconfont'


import App from './App';


ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <GlobalIconFont/>
    <App />
  </React.Fragment>,
  
  document.getElementById('root')
);

