import PublicTitle from '@/components/public_title';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import './index.less';

export default function LeftThree() {
  const domRef = useRef<any>();
  const chartInit = () => {
    const myChart = echarts.init(domRef.current);
    myChart.setOption({
      textStyle: {
        color: '#e0e0e0',
        fontSize: '15px',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['当月风险', '上月风险'],
        right: '0',
        textStyle: {
          color: '#e0e0e0',
          fontSize: '15px',
        },
      },
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true,
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['桐乡', '海宁', '海盐', '南湖', '秀洲', '经开区'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          color: '#86888d',
          splitLine: {
            lineStyle: {
              type: 'dotted',
            },
          },
        },
      ],
      series: [
        {
          name: '当月风险',
          type: 'bar',
          data: [370, 450, 590, 400, 390, 320],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(56, 152, 228,1)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(18, 44, 88,.1)', // 100% 处的颜色
                },
              ],
              false,
            ),
            shadowColor: 'rgba(0,10,21,1)',
          },
        },
        {
          name: '上月风险',
          type: 'bar',
          data: [280, 340, 460, 380, 290, 260],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(42, 223, 201,1)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(23, 81, 78,.1)', // 100% 处的颜色
                },
              ],
              false,
            ),
            shadowColor: 'rgba(0,160,221,1)',
          },
        },
      ],
    });
    //  echarts图表自适应,主动的去绑定resize事件达到自适应的效果
    window.onresize = function () {
      myChart.resize();
    };
  };
  useEffect(() => {
    chartInit();
  }, []);
  return (
    <div>
      <PublicTitle name="风险处置" text="" />
      <div ref={domRef} className="left_three"></div>
    </div>
  );
}
