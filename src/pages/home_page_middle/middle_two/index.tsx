import { useEffect, useRef, useState } from 'react';
import 'echarts-gl';
import * as echarts from 'echarts';
import jiaxing from '@/assets/json/jiaxing.json';
import xiuzhou from '@/assets/json/xiuzhou.json';
import jiashan from '@/assets/json/jiashanxian.json';
import tongxiang from '@/assets/json/tongxiangshi.json';
import haining from '@/assets/json/haining.json';
import haiyan from '@/assets/json/haiyan.json';
import gangqu from '@/assets/json/gangqu.json';
import jingkai from '@/assets/json/jingkai.json';
import nanhu from '@/assets/json/nanhu.json';
import pinghu from '@/assets/json/pinghu.json';
import mapBg from '@/assets/bg.png';
import './index.less';

interface mapJsonArrayType {
  title: string;
  value: any;
}

export default function MiddleTwo() {
  const data = [
    {
      name: '秀洲区',
      value: [120.7, 30.82],
      data: 271,
      // img: `image://${levelHighImage}`,
    },
    {
      name: '嘉善县',
      value: [120.92, 30.85],
      data: 39,
      // img: `image://${levelLowImage}`,
    },
    {
      name: '平湖市',
      value: [121.02, 30.7],
      data: 62,
      // img: `image://${levelMiddleImage}`,
    },
    {
      name: '海盐县',
      value: [120.95, 30.53],
      data: 52,
      // img: `image://${levelMiddleImage}`,
    },
    {
      name: '海宁市',
      value: [120.68, 30.53],
      data: 32,
      // img: `image://${levelLowImage}`,
    },
  ];

  const chartMapRef = useRef<HTMLDivElement>(null);
  const [backVisible, setBackVisible] = useState(false);

  const mapJsonArray: mapJsonArrayType[] = [
    {
      title: '秀洲区',
      value: xiuzhou,
    },
    {
      title: '桐乡市',
      value: tongxiang,
    },
    {
      title: '嘉善县',
      value: jiashan,
    },
    {
      title: '海宁市',
      value: haining,
    },
    {
      title: '海盐县',
      value: haiyan,
    },
    {
      title: '港区',
      value: gangqu,
    },
    {
      title: '经开',
      value: jingkai,
    },
    {
      title: '南湖区',
      value: nanhu,
    },
    {
      title: '平湖市',
      value: pinghu,
    },
  ];

  const mapData = [
    { name: '秀洲区', value: 86 },
    { name: '嘉善县', value: 39 },
    { name: '南湖区', value: 152 },
    { name: '平湖市', value: 299 },
    { name: '海盐县', value: 89 },
    { name: '海宁市', value: 52 },
    { name: '桐乡市', value: 9 },
    { name: '港区', value: 27 },
    { name: '经开', value: 33 },
    {
      name: '余新镇',
      value: 19,
    },
    {
      name: '西塘镇',
      value: 22,
    },
    {
      name: '武原街道',
      value: 12,
    },
    {
      name: '乌镇镇',
      value: 28,
    },
  ];

  const mapInit = (mapName: string, mapJson: any, icon: any) => {
    const mCharts = echarts.init(chartMapRef.current as HTMLElement);
    echarts.registerMap(mapName, mapJson);
    mCharts.hideLoading();
    mCharts.on('click', function (e) {
      const jsonList: any = mapJsonArray.find((item) => item.title === e.name);

      if (jsonList?.value) {
        mapInit(e.name, jsonList?.value, null);
        setBackVisible(true);
      }
    });
    const option = {
      tooltip: {
        show: true,
        trigger: 'item', // 设置该属性之后，会与series中data数据对应。注意data中对象的键名为name。如果单纯的展示数据可用此属性，不与formatter同用。
        alwaysShowContent: false,
        backgroundColor: '#0C121C',
        borderColor: 'rgba(0, 0, 0, 0.16);',
        hideDelay: 100,
        triggerOn: 'mousemove',
        enterable: true,
        textStyle: {
          color: '#DADADA',
          fontSize: '18',
          width: 20,
          height: 30,
          overflow: 'break',
        },
        formatter: function (e: any) {
          if (e.seriesType === 'scatter') {
            return `报警数 ${e.data.data} 个`;
          }
        },
      },
      geo: {
        map: mapName,
        aspectScale: 0.75,
        layoutCenter: ['50%', '50.5%'],
        layoutSize: '105%',
        silent: true,
        roam: false,
        z: 0,
        itemStyle: {
          normal: {
            areaColor: 'rgba(0, 15, 40, 0.5)',
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 5,
            borderColor: 'rgba(0, 0, 0, 0.7)',
            borderWidth: '1px',
          },
        },
      },
      series: [
        {
          type: 'map',
          label: {
            show: true, //是否显示市
            textStyle: {
              color: '#fff', //文字颜色
              fontSize: '14px', //文字大小
              fontFamily: '微软雅黑',
              backgroundColor: 'rgba(0,0,0,0)', //透明度0清空文字背景
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#2ab8ff',
              borderWidth: '2px',
              areaColor: {
                image: mapBg,
                repeat: 'repeat',
              },
            },
            emphasis: {
              areaColor: 'rgba(27, 152, 142,.8)',
              borderWidth: 0,
            },
          },
          zoom: 1.1,
          roam: false,
          map: mapName,
          data: mapData,
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          itemStyle: {
            color: '#f00',
          },
          symbol: function (value: number[], params: any) {
            return params.data?.img;
          },
          symbolSize: ['36px', '68px'],
          // symbolOffset: [-10, -25],
          z: 9999,
          data: icon,
        },
      ],
    };
    mCharts.setOption(option);
  };

  useEffect(() => {
    mapInit('嘉兴', jiaxing, data);
  }, [chartMapRef]);

  const backHomePage = () => {
    mapInit('嘉兴', jiaxing, data);
    setBackVisible(false);
  };

  return (
    <div className="map-chart">
      <div className="map-chart__bg" ref={chartMapRef}></div>
      <div className="map-chart_desc">
        <div className="desc_list">
          <span></span>
          <span>低预警</span>
        </div>
        <div className="desc_list_second">
          <span></span>
          <span>中预警</span>
        </div>
        <div className="desc_list_third">
          <span></span>
          <span>高预警</span>
        </div>
      </div>
    </div>
  );
}
