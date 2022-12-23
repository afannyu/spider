import './index.less';
import location from '@/assets/location.png';
import time from '@/assets/time.png';
import textt from '@/assets/text.png';

interface PublicItemPropType {
  borderTop: string;
  title: string;
  img: string;
  titleColor: string;
  text: string;
  content1: string;
  content2: string;
  content3: string;
}

export default function PublicItem(prop: PublicItemPropType) {
  const {
    borderTop,
    title,
    img,
    titleColor,
    text,
    content1,
    content2,
    content3,
  } = prop;
  return (
    <div className="item" style={{ borderTop: `${borderTop}` }}>
      <div className="item_title">
        <div className="title_lt">{title}</div>
        <div className="title_rt">
          <img src={img} alt="" />
          <div style={{ color: `${titleColor}` }}>{text}</div>
        </div>
      </div>
      <div className="item_content">
        <div className="content">
          <img src={location} alt="" />
          <div>{content1}</div>
        </div>
        <div className="content">
          <img src={time} alt="" />
          <div>{content2}</div>
        </div>
        <div className="content">
          <img src={textt} alt="" />
          <div>{content3}</div>
        </div>
      </div>
    </div>
  );
}
