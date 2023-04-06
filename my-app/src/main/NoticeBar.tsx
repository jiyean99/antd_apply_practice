import '../App.css';
import '../style/style.css'
import { Affix, Typography, Button, Badge } from 'antd';
import { Progress } from 'antd';

const { Text } = Typography;

function NoticeBar() {
  return (
    <div className="NoticeBar"
        style={{
            width: '100%',
            height:'42px',
            backgroundColor: '#2C3340',
        }}
    >
       <Progress percent={100} status="active" strokeColor={{from: '#2C3340',
        to: '#2C3340',}} showInfo={false} className='noticeBg' strokeWidth={42}/>
      <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
        <div className="notice-bar-icon"/>
      </Affix>
        <Text
            ellipsis
            style={{
                margin:'10px 50px 0 10px',
                color:'#fff',
                fontSize:'12px',
                zIndex:'10',
            }}
        >
            '꼴지 탈출+리그 첫 승'맨유, 리버풀 2-1 격파 '래시포드 ,'꼴지 탈출+리그 첫 승'맨유, 리버풀 2-1 격파 '래시포드
        </Text>
    </div>  
  );
}

export default NoticeBar;

