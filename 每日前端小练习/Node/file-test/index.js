import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useSetState, useMount } from 'ahooks';
import { LyContent } from 'yui2-for-react';
import { Button } from 'antd';
import classnames from 'classnames';
import { getSystemSettingInfo } from '@/services/api';
import { history } from 'umi';
// import styles from './index.less';

function Index(props, ref) {
  const [state, setState] = useSetState({
    loading: false,
    data: {},
  });
  const { className } = props;

  useMount(() => {});

  const getData = () => {
    setState({ loading: true });
    getSystemSettingInfo({})
      .then(res => {
        if (res?.meta.statusCode === 200) {
          setState({ data: res.data || {}, loading: false });
        }
      })
      .catch(err => {
        setState({ loading: false });
      });
  };

  const sysInfo = async () => {
    setState({ loading: true });
    const res = await getSystemSettingInfo({});
    setState({ loading: false });
    if (res?.meta.statusCode === 200) {
    }
  };

  return (
    <div className="p-20">
      <Button loading={state.loading} onClick={sysInfo}>
        123321
      </Button>
    </div>
  );
}

export default Index;

