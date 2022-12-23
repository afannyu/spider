import './index.less';
import MiddleOne from './middle_one';
import MiddleTwo from './middle_two';

export default function PageMiddle() {
  return (
    <div className="page_middle">
      <MiddleOne />
      <MiddleTwo />
    </div>
  );
}
