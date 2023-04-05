import '../App.css';
import '../style/style.css'
// import '../js/index.d.ts'
// import '../js/index.js'
import { Radio, Button } from 'antd';
import { useEffect, useState } from 'react';


function MatchTab() {
    // maintab 관련 스크립트
    // (event: MouseEvent) click이벤트를 수신하기위해 event 객체의 타입을 MouseEvent로 명시해보았으나 오류 발생 -> 더욱 범용적인 Event로 재작성
    useEffect(() => {
        const mainTabList = document.querySelectorAll(".main-tab > li");

        mainTabList.forEach((li) => {
          const handleClick = (event: Event) => {
            event.preventDefault();
            mainTabList.forEach((li) => {
              li.classList.remove("main-tab-on");
            });
            li.classList.add("main-tab-on");
          };
          li.addEventListener("click", handleClick);
          return () => {
            li.removeEventListener("click", handleClick);
          };
        });
    }, []);

    // sporttab 관련 스크립트
    useEffect(() => {
        const sportPanelList = document.querySelectorAll('.sport-panel > li');

        sportPanelList.forEach((li) => {
            const handleClick = (event: Event) => {
              event.preventDefault();
              sportPanelList.forEach((li) => {
                li.classList.remove("tab-active");
              });
              li.classList.add("tab-active");
            };
            li.addEventListener("click", handleClick);
            return () => {
              li.removeEventListener("click", handleClick);
            };
          });

    }, []);

  return (
    <div className="MatchTab">
        <section id="main">
            {/* 기존 html에 작성되어있던 태그 */}
            <ul className="main-tab">
                <li id="mainTab" className="main-tab-on">
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
                        {/* <span className='matcn-fav-icon'></span> */}
                        <svg width={14} height={14} fill='red'>
                            <g id="그룹_6920" data-name="그룹 6920" transform="translate(-5257 -9383)"><rect id="사각형_6593" data-name="사각형 6593" width="14" height="14" transform="translate(5257 9383)" fill="red" opacity="0"></rect><path id="star" className="fill" d="M137.134,176.908a.885.885,0,0,0-.457-.124.863.863,0,0,0-.445.124.959.959,0,0,0-.309.346l-1.285,2.608a.3.3,0,0,1-.111.136.548.548,0,0,1-.173.074l-2.865.408a.836.836,0,0,0-.432.2.779.779,0,0,0-.259.383.83.83,0,0,0-.012.47.886.886,0,0,0,.235.408l2.075,2.015a.437.437,0,0,1,.086.161.252.252,0,0,1,.012.173l-.482,2.855a.905.905,0,0,0,.049.47.835.835,0,0,0,.284.371.935.935,0,0,0,.445.161.9.9,0,0,0,.457-.1L136.5,186.7a.346.346,0,0,1,.173-.049.3.3,0,0,1,.173.049l2.569,1.347a.827.827,0,0,0,.4.1.879.879,0,0,0,.506-.161.835.835,0,0,0,.284-.371.9.9,0,0,0,.049-.47l-.494-2.855a.412.412,0,0,1,.012-.173.651.651,0,0,1,.1-.161l2.075-2.015a.887.887,0,0,0,.235-.408.766.766,0,0,0-.025-.47.779.779,0,0,0-.259-.383.828.828,0,0,0-.42-.2l-2.865-.408a.548.548,0,0,1-.173-.074.3.3,0,0,1-.111-.136l-1.285-2.608a.958.958,0,0,0-.309-.346" transform="translate(5127.318 9207.535)" fill="#eeeeee40"></path></g>
                        </svg>
                        <span className='match-fav-btn-num'>3</span>
                    </Radio.Button>
                </Radio.Group>
                <Button shape='circle'className="panel-tab-btn" style={{ minWidth:'30px',height:'30px'}}/>
            </div>

        </section>
    </div>
  );
}

export default MatchTab;

