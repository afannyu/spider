import PublicTitle from '@/components/public_title';
import { useEffect, useRef } from 'react';
import './index.less';
import * as echarts from 'echarts';

export default function RightTwo() {
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
        data: ['本周预警人数', '上周预警人数'],
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
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
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
          name: '本周预警人数',
          type: 'line',
          symbol: 'circle',
          symbolSize: 7,
          itemStyle: {
            color: '#29b6ff',
          },
          data: [102, 178, 290, 300, 320, 430, 440],
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(15, 58, 161,0.8)', //靠上方的透明颜色
              },
              {
                offset: 1,
                color: 'rgba(25, 0, 33,0.3)', //靠下方的透明颜色
              },
            ]),
          },
        },
        {
          name: '上周预警人数',
          type: 'line',
          symbol: 'circle',
          symbolSize: 7,
          itemStyle: {
            color: '#ff8915',
          },
          data: [100, 198, 210, 280, 350, 389, 420],
        },
      ],
    });
    window.onresize = function () {
      myChart.resize();
    };
  };
  useEffect(() => {
    chartInit();
  }, []);
  return (
    <div>
      <PublicTitle name="模型动态" text="" />
      <div ref={domRef} className="right_two"></div>
    </div>
  );
}
