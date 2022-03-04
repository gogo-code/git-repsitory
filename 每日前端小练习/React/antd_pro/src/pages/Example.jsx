/*
 * @Description:
 * @Author: zuoguoliang
 * @Date: 2021-09-27 14:01:04
 * @LastEditors: zuoguoliang
 * @LastEditTime: 2022-03-04 15:58:40
 */
import React, { Component } from 'react';
import moment from 'moment';
import { Form, Input, Button, Row, Col, DatePicker, Select, Space } from 'antd';
import 'moment/locale/zh-cn';
import styles from './index.less';

import locale from 'antd/lib/date-picker/locale/zh_CN';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Option = Select.Option;
const TextArea = Input.TextArea;
export default class Example extends Component {
  state = {
    current: '',
    xmmc: '',
    username: null,
  };

  componentDidMount() {
    let x=300
    let y=150
    this.contentRef.style.left=x
    this.contentRef.style.top=y
    setInterval(() => {
      this.onAnimation(x,y)
    }, 1);
  }

  onAnimation = (x,y) => {
    --x
  }

  onChange = val => {

  };
  // data = require('../');
  render() {
    return (
      <div>
        <div className={styles.circle}>
          <div
            className={styles.smallCircle}
            ref={el => {
              this.contentRef = el;
            }}
          ></div>
        </div>
      </div>
    );
  }
}
