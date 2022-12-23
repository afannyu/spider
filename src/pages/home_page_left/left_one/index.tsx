import PublicTitle from '@/components/public_title';
import './index.less';

export default function LeftOne() {
  interface leftOneType {
    id: number;
    num: string;
    count: string;
    text: string;
  }

  const leftOneList: leftOneType[] = [
    {
      id: 1,
      num: '8',
      count: '人',
      text: '当日预警',
    },
    {
      id: 2,
      num: '24',
      count: '人',
      text: '当周预警',
    },
    {
      id: 3,
      num: '92',
      count: '人',
      text: '当月预警',
    },
    {
      id: 4,
      num: '129',
      count: '条',
      text: '已反馈',
    },
    {
      id: 5,
      num: '4',
      count: '条',
      text: '已处置',
    },
    {
      id: 6,
      num: '26',
      count: '条',
      text: '未处置',
    },
  ];
  return (
    <div>
      <PublicTitle name="预警情况" text="" />
      <div className="left_one">
        {leftOneList.map((item, index) => {
          return (
            <div className="list">
              <div className="left_one_item">
                <span>{item.num}</span>
                {item.count}
              </div>
              <div className="left_one_text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
