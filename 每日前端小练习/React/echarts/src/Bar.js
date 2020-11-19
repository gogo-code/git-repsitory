import React from 'react';
import './index.css';
import { Card } from 'antd';
import 'antd/dist/antd.css';
//ReactEcharts避免使用new来初始化图表
import ReactEcharts from 'echarts-for-react';
import echartTheme from './echartTheme';
// import echarts from 'echarts'
// 按需加载，避免全部加载
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
class Bar extends React.Component {
  // 在组件挂载前注册主题样式
  componentWillMount() {
    echarts.registerTheme('Imooc', echartTheme);
  }
  getOption() {
    let option = {
      title: {
        text: '用户骑行订单',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '订单量',
          type: 'bar',
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
        },
      ],
    };
    return option;
  }
  getOption2() {
    let option = {
      title: {
        text: '用户骑行订单',
      },
      //鼠标经过显示
      tooltip: {
        trigger: 'axis',
      },
      // 副标题
      legend: {
        data: ['OFO', '摩拜', '小蓝'],
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
      },
      // 数据源
      series: [
        {
          name: 'OFO',
          type: 'bar',
          data: [2000, 3000, 5500, 7000, 8000, 12000, 20000],
        },
        {
          name: '摩拜',
          type: 'bar',
          data: [1500, 3000, 4500, 6000, 8000, 10000, 15000],
        },
        {
          name: '小蓝',
          type: 'bar',
          data: [1000, 2000, 2500, 4000, 6000, 7000, 8000],
        },
      ],
    };
    return option;
  }
  render() {
    return (
      <div className="Bar">
        <Card title="柱形图表之一">
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }}
          />
        </Card>
        <Card title="柱形图表之二" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }}
          />
        </Card>
      </div>
    );
  }
}

export default Bar;
