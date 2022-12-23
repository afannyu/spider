import './index.less';
import PageLeft from './home_page_left';
import PageMiddle from './home_page_middle';
import PageRight from './home_page_right';
import exit from '@/assets/exit.png';

export default function IndexPage() {
  return (
    <div className="home">
      <div className="home_title">
        <div className="title_left">
          <img src={exit} alt="" />
          <div>退出</div>
        </div>
        <div className="title_right">2022年03月29日 周二 14:00:14</div>
      </div>
      <div className="home_content">
        <PageLeft />
        <PageMiddle />
        <PageRight />
      </div>
    </div>
  );
}
