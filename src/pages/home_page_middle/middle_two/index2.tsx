import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useRef,
  useEffect,
} from 'react';
import classNames from 'classnames';
import type { ECharts } from 'echarts';
import * as echarts from 'echarts';
import geoJiaxingData from '@/assets/home-middle/geo-jiaxing.json';
import { MapWarningItem, NewsWarningLevel } from './typings';
import mapBgImage from '@/assets/home-middle/map.png';
// import mapBgImage2 from '@/assets/home-middle/bg-map2.webp';
// import levelHighImage from '@/assets/home-middle/icon-level-high.webp';
// import levelMiddleImage from '@/assets/home-middle/icon-level-middle.webp';
// import levelLowImage from '@/assets/home-middle/icon-level-low.webp';
import labelHighImage from '@/assets/home-middle/bg-high-level-label.svg';
import labelMiddleImage from '@/assets/home-middle/bg-middle-level-label.svg';
import labelLowImage from '@/assets/home-middle/bg-low-level-label.svg';
import './index.less';

interface MapWarningPropsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dataSource: MapWarningItem[]; // 最新预警数据列表
}

const SCATTER_LEVEL_IMAGE = {
  // [NewsWarningLevel.HIGH]: levelHighImage,
  // [NewsWarningLevel.MIDDLE]: levelMiddleImage,
  // [NewsWarningLevel.LOW]: levelLowImage,
  [NewsWarningLevel.UNKNOWN]: 'none',
};

const SCATTER_LABEL_LEVEL_IMAGE = {
  [NewsWarningLevel.HIGH]: labelHighImage,
  [NewsWarningLevel.MIDDLE]: labelMiddleImage,
  [NewsWarningLevel.LOW]: labelLowImage,
  [NewsWarningLevel.UNKNOWN]: 'none',
};

const AREA_LABEL_CENTER_OFFSET: { [key: string]: string[] } = {
  南湖: ['0', '50px'],
  嘉善: ['0', '0'],
  秀洲: ['-40px', '-40px'],
  经开: ['0', '24px'],
  海宁: ['0', '-14px'],
  平湖: ['30px', '-30px'],
};

const AREA_CENTER_OFFSET: { [key: string]: string[] } = {
  南湖: ['76px', '48px'],
  秀洲: ['-60px', '-90px'],
  嘉善: ['-10px', '-110px'],
  海盐: ['-5px', '-20px'],
  海宁: ['-40px', '10px'],
  平湖: ['90px', '-90px'],
  桐乡: ['-44px', '-28px'],
  港区: ['-10px', '-50px'],
  经开: ['0', '-28px'],
};

async function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve(img);
    };

    img.onerror = reject;

    img.src = url;
  });
}

const mapData: Array<{ name: string; offset: string[]; center: number[] }> =
  geoJiaxingData.features.map((item) => {
    const { name, center } = item.properties;
    const offset = AREA_CENTER_OFFSET[name] || [0, 0];
    const centerX = center[0];
    const centerY = center[1];

    return {
      name,
      offset,
      center: [centerX, centerY],
    };
  });

type ScatterDataItemType = {
  name: string;
  warningCount: number;
  value: number[];
  level: NewsWarningLevel;
};

function convertData(dataSource: MapWarningItem[]): ScatterDataItemType[] {
  let res: ScatterDataItemType[] = [];

  dataSource.forEach((data) => {
    mapData.forEach((item) => {
      if (item.name === data.name) {
        res.push({
          name: data.name,
          level: data.level,
          warningCount: data.value,
          value: item.center.concat(data.value),
        });
      }
    });
  });
  console.log(res);
  return res;
}

async function chartBgOptions(dataSource: MapWarningItem[]): Promise<any> {
  return loadImage(mapBgImage).then((bgImage) => {
    const canvas = document.createElement(`canvas`);
    canvas.width = bgImage.width;
    canvas.height = bgImage.height;
    const ctx = canvas.getContext('2d');
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    // 将绘图原点移到画布中心
    ctx?.translate(x, y);
    // 旋转角度
    ctx?.rotate((Math.PI / 180) * (Math.floor(Math.random() * 6) * 10));
    // 将画布原点移动
    ctx?.translate(-x, -y);
    // 绘制图片
    ctx?.drawImage(bgImage, 0, 0, bgImage?.width, bgImage?.height);
    const ext = bgImage?.src
      .substring(bgImage?.src.lastIndexOf(`.`) + 1)
      .toLowerCase();
    const dataURL = canvas.toDataURL(`image/` + ext);
    const image = new Image();
    image.src = dataURL;

    const options = {
      tooltip: {
        show: false,
      },
      series: [
        {
          name: '底图',
          type: 'map',
          silent: true,
          label: {
            show: false,
          },
          emphasis: {
            disabled: true,
          },
          select: {
            disabled: true,
          },
          itemStyle: {
            areaColor: {
              image,
              repeat: 'no-repeat',
            },
            borderWidth: 0,
          },
          map: 'jiaxing',
          data: dataSource,
        },
      ],
    };

    return options;
  });
}

async function mapChartOptions(dataSource: MapWarningItem[]): Promise<any> {
  const regions = dataSource.map((item) => {
    let labelStyle = {
      offset: AREA_LABEL_CENTER_OFFSET[item.name] || [0, 0],
    };
    return {
      name: item.name,
      itemStyle: {
        normal: {
          label: {
            show: true,
          },
        },
        emphasis: {
          label: {
            show: true,
          },
        },
      },
      label: labelStyle,
    };
  });
  const scatterData = convertData(dataSource);

  const options = {
    tooltip: {
      show: false,
    },
    visualMap: {
      type: 'piecewise',
      splitNumber: 3,
      min: 0,
      max: 100,
      calculable: true,
      realtime: false,
      itemWidth: 20,
      itemHeight: 4,
      right: 24,
      bottom: 40,
      align: 'left',
      itemGap: '8px',
      textStyle: {
        color: '#ddd',
        fontFamily: 'PingFangSC-Medium, PingFang SC',
        fontWeight: 400,
        fontSize: '14px',
      },
      pieces: [
        { min: 60, label: '高预警', color: '#FF2B2B' }, // 不指定 max，表示 max 为无限大（Infinity）。
        { min: 30, max: 59, label: '中预警', color: '#FF9A1F' },
        { max: 29, label: '低预警', color: '#35E770' },
      ],
      outOfRange: {
        color: ['#ddd', '#ddd'],
      },
      seriesIndex: 1,
    },
    geo: {
      componentType: 'geo',
      name: '嘉兴',
      map: 'jiaxing',
      roam: false,
      geoIndex: 0,
      label: {
        color: '#E5FBFF',
        fontFamily: 'PingFangSC-Medium, PingFang SC',
        fontWeight: 500,
        fontSize: '18px',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowBlur: 2,
        textShadowOffsetX: 0,
        textShadowOffsetY: 2,
        show: true,
      },
      emphasis: {
        disabled: false,
        itemStyle: {
          areaColor: 'RGBA(172, 234, 253, 0.2)',
          borderColor: '#A9E7FC',
          borderWidth: 1,
        },
        label: {
          show: true,
          color: '#E5FBFF',
        },
      },
      itemStyle: {
        areaColor: 'transparent',
        borderColor: '#A9E7FC',
        borderWidth: 1,
        label: {
          show: true,
        },
      },
      regions,
    },
    series: [
      {
        name: '地图',
        type: 'map',
        geoIndex: 0,
        select: {
          disabled: true,
        },
        data: dataSource,
      },
      {
        name: '预警指示器',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: (value: number[], params: { data: ScatterDataItemType }) => {
          const { level } = params.data;
          // const imageUrl = SCATTER_LEVEL_IMAGE[level] || 'none';

          // return `image://${imageUrl}`;
        },
        symbolSize: ['43px', '85px'],
        symbolOffset: (
          value: number[],
          params: { data: ScatterDataItemType },
        ) => {
          return AREA_CENTER_OFFSET[params?.data?.name] || [0, 0];
        },
        emphasis: {
          disabled: true,
        },
        animation: true,
        animationDuration: 600,
        data: scatterData,
      },
      {
        name: '预警数',
        type: 'scatter',
        coordinateSystem: 'geo',
        animation: true,
        animationDuration: 600,
        animationDelay: 400,
        symbol: (value: number[], params: { data: ScatterDataItemType }) => {
          const { level } = params.data;
          const imageUrl = SCATTER_LABEL_LEVEL_IMAGE[level] || 'none';

          return `image://${imageUrl}`;
        },
        symbolSize: ['120px', ' 40px'],
        symbolOffset: (
          value: number[],
          params: { data: ScatterDataItemType },
        ) => {
          const [x, y] = AREA_CENTER_OFFSET[params?.data?.name] || [0, 0];

          return [x + ' 80px', y + '-24px'];
        },
        label: {
          show: true,
          formatter: '预警数：{@value}',
          color: '#E5FBFF',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
          fontWeight: 500,
          fontSize: '15px',
          textShadowColor: 'rgba(0, 0, 0, 0)',
          textShadowBlur: 0,
          textShadowOffsetX: 0,
          textShadowOffsetY: 0,
          lineHeight: '20px',
          borderWidth: 0,
          padding: ['9px', '14px', ' 9px', '12px'],
        },
        emphasis: {
          disabled: true,
        },
        data: scatterData,
      },
    ],
  };

  return options;
}

const NewsWarning: React.FC<MapWarningPropsType> = (props) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartBgRef = useRef<HTMLDivElement>(null);
  const { dataSource } = props;

  let bgChart: ECharts | null = null;
  let mapChart: ECharts | null = null;

  useEffect(() => {
    mapChart = echarts.init(chartRef?.current as HTMLElement);
    bgChart = echarts.init(chartBgRef.current as HTMLElement);

    let newMapData = geoJiaxingData as any;
    echarts.registerMap('jiaxing', newMapData);
    Promise.all([chartBgOptions(dataSource), mapChartOptions(dataSource)]).then(
      ([bgOpts, mapOpts]) => {
        bgChart?.setOption(bgOpts);
        mapChart?.setOption(mapOpts);
      },
    );

    return () => {
      bgChart?.dispose();
      mapChart?.dispose();
      bgChart = null;
      mapChart = null;
    };
  }, [chartRef]);

  return (
    <div className={classNames(['map-chart', props.className])}>
      <div className="map-chart__bg" ref={chartBgRef}></div>
      <div className="map-chart__main" ref={chartRef}></div>
    </div>
  );
};

export default NewsWarning;
