import './index.less';
import publicTitleBg from '@/assets/pulic_title_bg.png';

interface PublicTitlePropType {
  name: String;
  text: string;
}

export default function PublicTitle(prop: PublicTitlePropType) {
  const { name, text } = prop;
  return (
    <div className="public_title">
      <img src={publicTitleBg}></img>
      <div className="title_name">{name}</div>
      <div className="title_text">{text}</div>
    </div>
  );
}
