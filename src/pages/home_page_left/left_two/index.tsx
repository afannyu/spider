import PublicTitle from '@/components/public_title';
import { useEffect, useRef } from 'react';
import './index.less';
import * as echarts from 'echarts';

export default function LeftTwo() {
  const domRef1 = useRef<any>();
  const domRef2 = useRef<any>();
  const domRef3 = useRef<any>();
  const chartInit = () => {
    const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#ff734a', // 0% 处的颜色
      },
      {
        offset: 0.17,
        color: '#ff734a', // 100% 处的颜色
      },
      {
        offset: 0.9,
        color: '#ea1818', // 100% 处的颜色
      },
      {
        offset: 1,
        color: '#ea1818', // 100% 处的颜色
      },
    ]);
    const colorSet = [
      // 设置百分比的进度
      [0.08, color],
      [1, 'rgba(36, 51, 82,0.8)'],
    ];
    const myChart = echarts.init(domRef1.current);
    myChart.setOption({
      series: [
        {
          type: 'gauge',
          name: '外层辅助',
          radius: '74%',
          pointer: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 1,
            },
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: [[1, '#4c101c']],
              width: 2,
              opacity: 1,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            length: 20,
            lineStyle: {
              color: '#051932',
              width: 0,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false,
          },
        },
        {
          type: 'gauge',
          radius: '70%',
          pointer: {
            show: false,
          },
          detail: {
            offsetCenter: ['0%', '0%'],
          },
          data: [
            {
              detail: { formatter: '8%', color: '#FFF', fontSize: '25px' },
            },
          ],
          title: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: colorSet,
              width: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            length: 25,
            lineStyle: {
              color: '#00377a',
              width: 2,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false,
          },
        },
        {
          name: '灰色内圈', //刻度背景
          type: 'gauge',
          z: 2,
          radius: '60%',
          //center: ["50%", "75%"], //整体的位置设置
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: [[1, '#4c101c']],
              width: 2,
              opacity: 1, //刻度背景宽度
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          pointer: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        {
          name: '白色圈刻度',
          type: 'gauge',
          radius: '79%',
          startAngle: 225, //刻度起始
          endAngle: -45, //刻度结束
          z: 4,
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 6, //刻度节点线长度
            lineStyle: {
              width: 2,
              color: '#991419',
            }, //刻度节点线
          },
          axisLabel: {
            color: 'rgba(255,255,255,0)',
            fontSize: 12,
          }, //刻度节点文字颜色
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              opacity: 0,
            },
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 0,
              name: '',
            },
          ],
        },
        {
          //内圆
          type: 'pie',
          radius: '56%',
          center: ['50%', '50%'],
          z: 1,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              0.8,
              [
                {
                  offset: 0,
                  color: '#72151b',
                },
                {
                  offset: 0.5,
                  color: 'rgba(42, 27, 35,.7)',
                },
                {
                  offset: 1,
                  color: 'rgba(42, 27, 35,.3)',
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
      ],
      grid: {
        top: 10,
        containLabel: true,
      },
    });
  };
  const chartInit2 = () => {
    const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#ff9e37', // 0% 处的颜色
      },
      {
        offset: 0.17,
        color: '#ff9e37', // 100% 处的颜色
      },
      {
        offset: 0.9,
        color: '#ff8037', // 100% 处的颜色
      },
      {
        offset: 1,
        color: '#ff8037', // 100% 处的颜色
      },
    ]);
    const colorSet = [
      // 设置百分比的进度
      [0.2, color],
      [1, 'rgba(36, 51, 82,0.8)'],
    ];
    const myChart = echarts.init(domRef2.current);
    myChart.setOption({
      series: [
        {
          type: 'gauge',
          name: '外层辅助',
          radius: '74%',
          pointer: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 1,
            },
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: [[1, '#472830']],
              width: 2,
              opacity: 1,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            length: 20,
            lineStyle: {
              color: '#051932',
              width: 0,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false,
          },
        },
        {
          type: 'gauge',
          radius: '70%',
          pointer: {
            show: false,
          },
          detail: {
            offsetCenter: ['0%', '0%'],
          },
          data: [
            {
              detail: { formatter: '20%', color: '#FFF', fontSize: '25px' },
            },
          ],
          title: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: colorSet,
              width: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            length: 25,
            lineStyle: {
              color: '#00377a',
              width: 2,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false,
          },
        },
        {
          name: '灰色内圈', //刻度背景
          type: 'gauge',
          z: 2,
          radius: '60%',
          //center: ["50%", "75%"], //整体的位置设置
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: [[1, '#45272b']],
              width: 2,
              opacity: 1, //刻度背景宽度
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          pointer: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        {
          name: '白色圈刻度',
          type: 'gauge',
          radius: '79%',
          startAngle: 225, //刻度起始
          endAngle: -45, //刻度结束
          z: 4,
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 6, //刻度节点线长度
            lineStyle: {
              width: 2,
              color: '#c65934',
            }, //刻度节点线
          },
          axisLabel: {
            color: 'rgba(255,255,255,0)',
            fontSize: 12,
          }, //刻度节点文字颜色
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              opacity: 0,
            },
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 0,
              name: '',
            },
          ],
        },
        {
          //内圆
          type: 'pie',
          radius: '56%',
          center: ['50%', '50%'],
          z: 1,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              0.8,
              [
                {
                  offset: 0,
                  color: '#824335',
                },
                {
                  offset: 0.5,
                  color: 'rgba(46, 32, 43,.7)',
                },
                {
                  offset: 1,
                  color: 'rgba(46, 32, 43,.3)',
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
      ],
      grid: {
        top: 10,
        containLabel: true,
      },
    });
  };
  const chartInit3 = () => {
    const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#44e3a2', // 0% 处的颜色
      },
      {
        offset: 0.17,
        color: '#44e3a2', // 100% 处的颜色
      },
      {
        offset: 0.9,
        color: '#cae352', // 100% 处的颜色
      },
      {
        offset: 1,
        color: '#cae352', // 100% 处的颜色
      },
    ]);
    const colorSet = [
      // 设置百分比的进度
      [0.31, color],
      [1, 'rgba(36, 51, 82,0.8)'],
    ];
    const myChart = echarts.init(domRef3.current);
    myChart.setOption({
      series: [
        {
          type: 'gauge',
          name: '外层辅助',
          radius: '74%',
          pointer: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 1,
            },
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: [[1, '#565a3f']],
              width: 2,
              opacity: 1,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            length: 20,
            lineStyle: {
              color: '#051932',
              width: 0,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false,
          },
        },
        {
          type: 'gauge',
          radius: '70%',
          pointer: {
            show: false,
          },
          detail: {
            offsetCenter: ['0%', '0%'],
          },
          data: [
            {
              detail: { formatter: '56%', color: '#FFF', fontSize: '25px' },
            },
          ],
          title: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: colorSet,
              width: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            length: 25,
            lineStyle: {
              color: '#00377a',
              width: 2,
              type: 'solid',
            },
          },
          axisLabel: {
            show: false,
          },
        },
        {
          name: '灰色内圈', //刻度背景
          type: 'gauge',
          z: 2,
          radius: '60%',
          //center: ["50%", "75%"], //整体的位置设置
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: [[1, '#504b47']],
              width: 2,
              opacity: 1, //刻度背景宽度
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          pointer: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        {
          name: '白色圈刻度',
          type: 'gauge',
          radius: '79%',
          startAngle: 225, //刻度起始
          endAngle: -45, //刻度结束
          z: 4,
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 6, //刻度节点线长度
            lineStyle: {
              width: 2,
              color: '#adb848',
            }, //刻度节点线
          },
          axisLabel: {
            color: 'rgba(255,255,255,0)',
            fontSize: 12,
          }, //刻度节点文字颜色
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              opacity: 0,
            },
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 0,
              name: '',
            },
          ],
        },
        {
          //内圆
          type: 'pie',
          radius: '56%',
          center: ['50%', '50%'],
          z: 1,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(
              0.5,
              0.5,
              0.8,
              [
                {
                  offset: 0,
                  color: '#647346',
                },
                {
                  offset: 0.5,
                  color: 'rgba(39, 55, 60,.7)',
                },
                {
                  offset: 1,
                  color: 'rgba(39, 55, 60,.3)',
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
      ],
      grid: {
        top: 10,
        containLabel: true,
      },
    });
  };
  useEffect(() => {
    chartInit();
    chartInit2();
    chartInit3();
  }, []);
  return (
    <div>
      <PublicTitle name="风险等级" text="" />
      <div className="left_two">
        <div className="left_two_item">
          <div ref={domRef1}></div>
          <div className='item_red'>高危</div>
          <div>紧急处理</div>
        </div>
        <div className="left_two_item">
          <div ref={domRef2}></div>
          <div className='item_ori'>中危</div>
          <div>关注研判</div>
        </div>
        <div className="left_two_item">
          <div ref={domRef3}></div>
          <div className='item_yell'>低危</div>
          <div>持续跟踪</div>
        </div>
      </div>
    </div>
  );
}
