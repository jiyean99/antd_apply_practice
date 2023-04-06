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
    
    //fav-icon animation관련 스크립트
    // const iconAni = document.getElementById('favIconAni');
    //
    //
    // iconAni.addEventListener('click', () => {
    //   if (iconAni.classList.contains('my-class')) {
    //     iconAni.classList.remove('my-class');
    //   } else {
    //     iconAni.classList.add('my-class');
    //   }
    // });
    // const iconAni = document.getElementById('favIconAni');
    //
    // if (iconAni) {
    //   iconAni.addEventListener('click', () => {
    //     if (iconAni.classList.contains('icon-click-ani')) {
    //       iconAni.classList.remove('icon-click-ani');
    //     } else {
    //       iconAni.classList.add('icon-click-ani');
    //     }
    //   });
    // }
  // const favIconAni = document.getElementById('fav-icon-ani');
  //
  // if (favIconAni !== null) {
  //   favIconAni.addEventListener('click', () => {
  //     favIconAni.classList.toggle('icon-click-ani');
  //   });
  // }

  //     const favoriteSvg = document.querySelectorAll('.favorite-svg');
  //
  //     if (favoriteSvg !== null) {
  //       favoriteSvg.forEach((svg) => {
  //         svg.addEventListener('click', () => {
  //           svg.classList.toggle('icon-click-ani');
  //         });
  //       });
  //     }
  return (
    <div className="DividendBoard">
        <Button 
            type="link"
            style={{
                height:'36px',
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
                <a href="#" className='d-b-icon2' id='test1'>
                    <div className='fav-icon-bg'/>
                    <svg  id='fav-icon-ani' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" className="favorite-svg css-1ytxq94">
                        <g id="그룹_6920" data-name="그룹 6920" transform="translate(-5250.5 -9377)">52
                            <rect id="사각형_6593" data-name="사각형 6593" width="14" height="14" transform="translate(5257 9383)" fill="red" opacity="0"/>
                            <path id="star" className="fill" d="M137.134,176.908a.885.885,0,0,0-.457-.124.863.863,0,0,0-.445.124.959.959,0,0,0-.309.346l-1.285,2.608a.3.3,0,0,1-.111.136.548.548,0,0,1-.173.074l-2.865.408a.836.836,0,0,0-.432.2.779.779,0,0,0-.259.383.83.83,0,0,0-.012.47.886.886,0,0,0,.235.408l2.075,2.015a.437.437,0,0,1,.086.161.252.252,0,0,1,.012.173l-.482,2.855a.905.905,0,0,0,.049.47.835.835,0,0,0,.284.371.935.935,0,0,0,.445.161.9.9,0,0,0,.457-.1L136.5,186.7a.346.346,0,0,1,.173-.049.3.3,0,0,1,.173.049l2.569,1.347a.827.827,0,0,0,.4.1.879.879,0,0,0,.506-.161.835.835,0,0,0,.284-.371.9.9,0,0,0,.049-.47l-.494-2.855a.412.412,0,0,1,.012-.173.651.651,0,0,1,.1-.161l2.075-2.015a.887.887,0,0,0,.235-.408.766.766,0,0,0-.025-.47.779.779,0,0,0-.259-.383.828.828,0,0,0-.42-.2l-2.865-.408a.548.548,0,0,1-.173-.074.3.3,0,0,1-.111-.136l-1.285-2.608a.958.958,0,0,0-.309-.346" transform="translate(5127.318 9207.535)" />
                        </g>
                    </svg>
                </a>
                <a href="#" className='d-b-icon3'>+13</a>
            </div>
            <div>
                <div>
                    <Text 
                    ellipsis className='league-table-group'>
                        <Text className='league-table-l'>토르페도 N.노브고로드</Text>
                        <span className='l-t-c'>vs</span>
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

