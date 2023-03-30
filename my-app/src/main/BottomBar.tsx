import '../App.css';
import '../style/style.css'
import { Affix, Button, Radio } from 'antd';

function BottomBar() {
  return (
    <div className="BottomBar">
      <Affix offsetBottom={0} onChange={affixed => console.log(affixed)}>
        <div className='main-btn'>홈</div>
      </Affix>
      <Affix offsetBottom={0} onChange={affixed => console.log(affixed)}>
        <div className='pre-btn'>승부예측</div>
      </Affix>
      <Affix offsetBottom={0} onChange={affixed => console.log(affixed)}>
        <Button></Button>
      </Affix>
      <Affix offsetBottom={0} onChange={affixed => console.log(affixed)}>
        <div className='his-btn'>베팅내역</div>
      </Affix>
      <Affix offsetBottom={0} onChange={affixed => console.log(affixed)}>
        <div className='menu-btn'>메뉴</div>
      </Affix>
    </div>
  );
}

export default BottomBar;

