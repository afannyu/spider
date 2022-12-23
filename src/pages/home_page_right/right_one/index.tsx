import PublicTitle from '@/components/public_title';
import './index.less';

export default function RightOne() {
  interface rightOneType {
    id: number;
    num: string;
    count: string;
    text: string;
  }

  const rightOneList: rightOneType[] = [
    {
      id: 1,
      num: '4',
      count: '起',
      text: '闭环管控',
    },
    {
      id: 2,
      num: '12',
      count: '起',
      text: '消除隐患',
    },
    {
      id: 3,
      num: '6',
      count: '起',
      text: '打击处理',
    },
  ];
  return (
    <div>
      <PublicTitle name="预警成效" text="本周 本月 本年" />
      <div className="right_one">
        {rightOneList.map((item, index) => {
          return (
            <div className="list">
              <div className="right_one_item">
                <span>{item.num}</span>
                {item.count}
              </div>
              <div className="right_one_text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
