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
        <Button shape='circle' className='bottom-btn'><span>6</span><span className='bottom-btn-date'>12.15</span></Button>
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

