import PublicTitle from '@/components/public_title';
import { useEffect, useRef } from 'react';
import './index.less';
import * as echarts from 'echarts';

export default function RightThree() {
  const domRef = useRef<any>();
  const chartInit = () => {
    const myChart = echarts.init(domRef.current);
    const pieData = [
      { value: 79, name: '情感纠纷' },
      { value: 11, name: '经济纠纷' },
      { value: 4, name: '家庭矛盾' },
      { value: 2, name: '邻里纠纷' },
      { value: 2, name: '工作纠纷' },
      { value: 12, name: '琐事纠纷' },
      { value: 14, name: '精神病人肇事肇祸' },
    ];
    myChart.setOption({
      title: {
        text: '         命案数',
        textStyle: {
          fontSize: 20,
          color: '#fff',
        },
        subtextStyle: {
          fontSize: 16,
          color: '#fff',
          fontWeight: 500,
        },
        textAlign: 'center', //图例文字居中显示
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        textStyle: {
          // color: '#8C98A4',
          rich: {
            // 富文本，用以修改 legend 的样式
            a: {
              width: '130px',
              fontSize: 14,
              color: '#fff',
              padding: [0, 30, 0, 0],
            },
            b: {
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
            },
          },
        },

        orient: 'vertical',
        icon: 'circle',
        itemHeight: 11, //修改icon图形大小
        show: true,
        top: 'center',
        left: '60%',
        formatter: (name: string) => {
          let target = null;
          for (let i = 0; i < pieData.length; i++) {
            if (pieData[i].name === name) {
              target = pieData[i].value;
            }
          }
          let arr = ['{a|' + name + '}', '{b|' + target + '}'];
          return arr.join('');
        },
      },
      series: [
        {
          type: 'pie',
          radius: ['45%', '85%'],
          color: [
            '#128FFF',
            '#56FFBC',
            '#55B1D7',
            '#895BD8',
            '#FF2B2B',
            '#FF8915',
            '#29B6FF',
          ],
          right: '50%',
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          // 鼠标划入
          emphasis: {
            label: {
              show: false,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: pieData,
        },
        {
          //内圆
          type: 'pie',
          radius: '34%',
          center: ['25%', '50%'],
          z: 1,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              0.7,
              [
                {
                  offset: 0,
                  color: 'rgba(8, 15, 37,.7)',
                },
                {
                  offset: 0.5,
                  color: 'rgba(7, 55, 89,.7)',
                },
                {
                  offset: 1,
                  color: '#01c9ff',
                },
              ],
              false,
            ),
          },
          label: {
            show: false,
          },
          tooltip: {
            show: false,
          },
          data: [100],
        },
        {
          type: 'gauge',
          radius: '70%',
          center: ['25%', '50%'],
          pointer: {
            show: false,
          },
          detail: {
            offsetCenter: ['0%', '0%'],
          },
          data: [
            {
              detail: {
                formatter: '124',
                color: '#FFF',
                fontSize: '25px',
              },
            },
          ],
          title: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: [[1, 'rgba(11, 24, 57,.1)']],
            },
          },
          axisLabel: {
            show: false,
          },
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
      <PublicTitle name="发案态势" text="" />
      <div className="right_three" ref={domRef}></div>
    </div>
  );
}
