import '../App.css';
import '../style/style.css';
import { Button, Radio } from 'antd';
import { Typography } from 'antd';
// import { useState } from "react"
import React, { useState } from "react";
// import { RadioChangeEvent } from 'antd/lib/radio';
import { RadioChangeEvent } from 'antd/es/radio';


const { Text } = Typography;


function DividendBoard() {
    
    const [disabled, setDisabled] = useState([false, false, false, false, false, false, false]);
    
    // 기존 e가 any타입으로 지정되어있어 e를 명시적으로 지정해주면서 추가적으로 RadioChangeEvent를 import 하였습니다
    const onChange = (e: RadioChangeEvent) => {
        if (e.target.value === 1) {
          setDisabled([false, true, true, true, true, true, true]);
        } else if (e.target.value === 2){
          setDisabled([false, false, false, true, true, false, false]);
        } else if(e.target.value === 3){
          setDisabled([false, false, false, true, true, false, true]);
        }else if(e.target.value === 4){
          setDisabled([true, true, true, false, false, false, false]);
        }else if(e.target.value === 6){
          setDisabled([true, true, true, false, false, false, false]);
        }else if(e.target.value === 7){
          setDisabled([false, false, false, false, false, false, false]);
        }else if(e.target.value === 9){
          setDisabled([false, false, false, false, false, false, false]);
        }
      };

  return (
    <div className="DividendBoard">
        <Button 
            type="link"
            style={{
                fontSize:'13px',
                color:'#eee',
                fontWeight:'500',
            }}
        >
            <span className='nation'>영국</span>
            <span className='league'>프리미어리그</span>
        </Button>
        <div className='d-b-board'>
            <div>
                <Text
                    className='date'
                >
                    12/10(화)<span>04:00</span>
                </Text>
                <a href="#" className='d-b-icon1'></a>
                <a href="#" className='d-b-icon2'></a>
                <a href="#" className='d-b-icon3'>+13</a>
            </div>
            <div>
                <div>
                    <Text 
                    ellipsis className='league-table-group'>
                        <Text className='league-table-l'>토르페도 N.노브고로드</Text>
                        <span>vs</span>
                        <Text className='league-table-r'>SKA 상트페테르부르크</Text>
                    </Text>
                </div>
                <Radio.Group  onChange={onChange} buttonStyle="solid" className='d-b-btn-group'>
                    <Radio.Button value="1" className='d-b-btn' disabled={disabled[0]} >
                        <span>홈 승</span><span className='d-b-num'>1.93</span>
                    </Radio.Button>
                    <Radio.Button value="2" className='d-b-btn' disabled={disabled[1]} >
                        <span>무</span><span className='d-b-num'>1.93</span>
                    </Radio.Button>
                    <Radio.Button value="3" className='d-b-btn' disabled={disabled[2]} >
                        <span className='d-b-num'>1.93</span><span>원정 승</span>
                    </Radio.Button>
                    <Radio.Button value="4" className='d-b-btn' disabled={disabled[3]} >
                        <span>홈 승</span><span className='d-b-num'>1.93</span>
                    </Radio.Button>
                    <Radio.Button value="5" className='d-b-btn accodian'>
                        <span className='aco-position'>H</span><span className='aco-num'>0.5</span>
                    </Radio.Button>
                    <Radio.Button value="6" className='d-b-btn' disabled={disabled[4]} >
                        <span className='d-b-num'>1.93</span><span>원정 승</span>
                    </Radio.Button>
                    <Radio.Button value="7" className='d-b-btn' disabled={disabled[5]} >
                        <span>언더</span><span className='d-b-num d-b-under'>1.18</span>
                    </Radio.Button>
                    <Radio.Button value="8" className='d-b-btn accodian'>
                        <span className='aco-position'>U/O</span><span className='aco-num'>2.5</span>
                    </Radio.Button>
                    <Radio.Button value="9" className='d-b-btn' disabled={disabled[6]} >
                        <span className='d-b-num d-b-over'>1.93</span><span>오버</span>
                    </Radio.Button>
                </Radio.Group>
            </div>
        </div>
    </div>
  );
}

export default DividendBoard;

