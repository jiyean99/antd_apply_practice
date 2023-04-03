import '../App.css';
import '../style/style.css'
// import '../js/script.js'
import { Radio, Button } from 'antd';


function MatchTab() {
  return (
    <div className="MatchTab">
        <section id="main">
            <ul className="main-tab">
                <li className="main-tab-on">
                    <a href="#">스포츠</a>
                </li>
                <li>
                    <a href="#">라이브</a>
                </li>
            </ul>
            <ul className="sport-panel">
                <li>
                    <a href="#">전체</a>
                </li>
                <li className="tab-active">
                    <a href="#">축구</a>
                </li>
                <li>
                    <a href="#">농구</a>
                </li>
                <li>
                    <a href="#">야구</a>
                </li>
                <li>
                    <a href="#">배구</a>
                </li>
                <li>
                    <a href="#">아이스하키</a>
                </li>
                <li>
                    <a href="#">기타</a>
                </li>
            </ul>
            <div
                className='p-t-box'
                style={{
                    width:'100%',
                    padding: '0 9px',
                }}
            >
                <Radio.Group buttonStyle="solid" defaultValue="all">
                    <Radio.Button value="all" className='match-all-btn'>
                        <span>전체</span><span className='match-all-btn-num'>52</span>
                    </Radio.Button>
                    <Radio.Button value="major" className='match-major-btn'>
                        <span>주요</span><span className='match-all-btn-num'>52</span>
                    </Radio.Button>
                    <Radio.Button value="fav" className='match-fav-btn'>
                        <span className='matcn-fav-icon'></span><span className='match-fav-btn-num'>3</span>
                    </Radio.Button>
                </Radio.Group>
                <Button shape='circle'className="panel-tab-btn" style={{ minWidth:'30px',height:'30px'}}/>
            </div>

        </section>
    </div>
  );
}

export default MatchTab;

