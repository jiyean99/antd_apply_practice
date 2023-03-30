import '../App.css';
import '../style/style.css'
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
            {/* <ul className="panel-tab">
                <li className="panel-tab-active">
                    <a href="#" className="all">전체<span>52</span></a>
                </li>
                <li>
                    <a href="#" className="main">주요<span>21</span></a>
                </li>
                <li>
                    <a href="#" className="favorite"><span>3</span></a>
                </li>
                <li>
                    <a href="#"  className="panel-tab-btn"></a>
                </li>
            </ul> */}
            <div
                className='p-t-box'
                style={{
                    width:'100%',
                    padding: '0 9px',
                }}
            >
                <Radio.Group defaultValue="a">
                    <Radio.Button 
                        value="a"
                        style={{
                            width: '80px',
                            height:'34px',
                            borderRadius: '17px',
                            backgroundColor:'#50607020',
                            border:'1px solid #50607080',
                            color:'#eee',
                            fontSize:'12px',
                            marginRight:'9px',
                        }}
                    >
                        전체<span style={{marginLeft:"12px"}}>52</span>
                    </Radio.Button>
                    <Radio.Button 
                        value="b"
                        style={{
                            width: '80px',
                            height:'34px',
                            borderRadius: '17px',
                            backgroundColor:'#50607020',
                            border:'1px solid #50607080',
                            color:'#eee',
                            fontSize:'12px',
                            marginRight:'9px',
                        }}
                    >
                        주요<span style={{marginLeft:"12px"}}>52</span>
                    </Radio.Button>
                    <Radio.Button 
                        value="c"
                        style={{
                            width: '66px',
                            height:'34px',
                            borderRadius: '17px',
                            backgroundColor:'#50607020',
                            border:'1px solid #50607080',
                            color:'#eee',
                            fontSize:'12px',
                        }}
                    >
                        <span className="panel-tab-icon"/>
                        <span>3</span>
                    </Radio.Button>
                </Radio.Group>
                <Button shape='circle'className="panel-tab-btn" style={{ minWidth:'30px',height:'30px'}}/>
            </div>

        </section>
    </div>
  );
}

export default MatchTab;

