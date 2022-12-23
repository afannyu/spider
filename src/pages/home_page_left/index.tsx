import './index.less';
import LeftOne from './left_one';
import LeftTwo from './left_two';
import LeftThree from './left_three';

export default function PageLeft() {
  return (
    <div className="page_left">
      <LeftOne />
      <LeftTwo />
      <LeftThree />
    </div>
  );
}
