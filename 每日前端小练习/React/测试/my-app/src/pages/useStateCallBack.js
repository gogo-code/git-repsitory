import React, { useState, useEffect } from 'react';

export default function useStateCallBack() {
  // useState如何实现setState的回调
  const [count, setCount] = useState(0);
  // 方法一：在useEffect中监听
  const addCount1 = () => {
    setCount(count + 1);
  };

  useEffect(
    () => {
      console.log(count);
      //    function(){

      //    }
    },
    [count]
  );

  // 方法二：Promise实现
  const addCount2 = () => {
    new Promise(resolve => {
      setCount(num => {
        return num + 1;
      });
    }).then(res => {
      console.log(res);
    });
  };
  return (
    <div>
      <button onClick={addCount1}>add1</button>
      <button onClick={addCount2}>add2</button>
      <div>{count}</div>
    </div>
  );
}
