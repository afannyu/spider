import './index.less';
import PublicItem from '@/components/public_item';
import red from '@/assets/error_red.png';
import ori from '@/assets/error_ori.png';
import yellow from '@/assets/error_yellow.png';

export default function MiddleOne() {
  interface middleOneType {
    id: number;
    borderTop: string;
    title: string;
    img: string;
    titleColor: string;
    text: string;
    content1: string;
    content2: string;
    content3: string;
  }

  const middleOneList: middleOneType[] = [
    {
      id: 1,
      borderTop: '2px solid #ff2b2b',
      title: '熊乐萍',
      img: red,
      titleColor: '#ff2b2b',
      text: '高危-紧急处理',
      content1: '嘉兴市南湖区商务大道',
      content2: '2022-5-19 13:20',
      content3: '扬言自杀/杀人',
    },
    {
      id: 2,
      borderTop: '2px solid #ff9f1d',
      title: '郝冰',
      img: ori,
      titleColor: '#ff9f1d',
      text: '中危-关注研判',
      content1: '嘉兴市南湖区商务大道',
      content2: '2022-5-19 13:20',
      content3: '个人极端',
    },
    {
      id: 3,
      borderTop: '2px solid #eaf327',
      title: '阿朋青',
      img: yellow,
      titleColor: '#eaf327',
      text: '低危-持续跟踪',
      content1: '嘉兴市南湖区商务大道',
      content2: '2022-5-19 13:20',
      content3: '邻里纠纷',
    },
  ];
  return (
    <div className="middle_one">
      <div className="middle_one_lt">最新预警</div>
      <div className="middle_one_md">
        {middleOneList.map((item, index) => {
          return (
            // 可复用的item
            <PublicItem
              borderTop={item.borderTop}
              title={item.title}
              img={item.img}
              titleColor={item.titleColor}
              text={item.text}
              content1={item.content1}
              content2={item.content2}
              content3={item.content3}
            />
          );
        })}
      </div>
      <div className="middle_one_rt">
        <div
          style={{ backgroundColor: '#e7e7e7', height: '8px', width: '8px' }}
        ></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
