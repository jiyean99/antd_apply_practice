import '../App.css';
import '../style/style.css'
import { Affix, Button } from 'antd';
import { useEffect, useState } from 'react';

function BottomBar() {

  useEffect(() => {
    const mainTabList = document.querySelectorAll(".BottomBar > div");

    mainTabList.forEach((div) => {
      const handleClick = (event: Event) => {
        event.preventDefault();
        mainTabList.forEach((div) => {
          div.classList.remove("bottom-on");
        });
        div.classList.add("bottom-on");
      };
      div.addEventListener("click", handleClick);
      return () => {
        div.removeEventListener("click", handleClick);
      };
    });
}, []);

  return (
    <div className="BottomBar">
        <div className='main-btn'>
          <svg width="22" height="22" viewBox="0 0 22 22" className="css-17is1yn">
            <g transform="translate(15828.999 12303)">
              <path d="M578.846,632.292h-2.965a.6.6,0,0,1-.6-.6v-4.829a.4.4,0,0,0-.4-.4H571.76a.4.4,0,0,0-.4.4v4.831a.6.6,0,0,1-.6.6h-2.967a2.1,2.1,0,0,1-2.1-2.1v-7.147h-1.064a1.4,1.4,0,0,1-.923-2.449l8.682-7.741a1.4,1.4,0,0,1,1.863,0l8.685,7.742a1.4,1.4,0,0,1-.929,2.448h-1.061v7.147A2.1,2.1,0,0,1,578.846,632.292Zm-2.365-1.2h2.365a.9.9,0,0,0,.9-.9v-7.747a.6.6,0,0,1,.6-.6H582a.237.237,0,0,0,.155-.069.2.2,0,0,0-.019-.283l-8.686-7.742a.2.2,0,0,0-.267,0l-8.683,7.741a.2.2,0,0,0-.07.153.2.2,0,0,0,.2.2h1.661a.6.6,0,0,1,.6.6v7.747a.9.9,0,0,0,.9.9h2.367v-4.23a1.6,1.6,0,0,1,1.6-1.6h3.121a1.6,1.6,0,0,1,1.6,1.6Z" transform="translate(-16391.332 -12914.501)"/>
            </g>
          </svg>
          <span>홈</span>
        </div>
        <div className='pre-btn bottom-on'>
          <svg width="22" height="22" viewBox="0 0 22 22" className="css-su4z1q">
            <g id="그룹_6955" data-name="그룹 6955" transform="translate(15794 12303)">
              <rect id="사각형_6570" data-name="사각형 6570" width="22" height="22" transform="translate(-15794 -12303)" fill="#1993ff" opacity="0"/>
              <g id="그룹_6953" data-name="그룹 6953" transform="translate(0.5 -0.001)">
                <path id="패스_6333" className="fill" data-name="패스 6333" d="M617.333,631.667h-19a1,1,0,0,1-1-1v-16a1,1,0,0,1,1-1h19a1,1,0,0,1,1,1v16A1,1,0,0,1,617.333,631.667Zm-18.8-1.2h18.6v-15.6h-18.6Z" transform="translate(-16391.332 -12914.666)"/>
                <path id="패스_6334" className="fill" data-name="패스 6334" d="M598.08,626.257h-.6v-7.2h.6a3.6,3.6,0,1,1,0,7.2Zm.6-5.924v4.648a2.4,2.4,0,0,0,0-4.648Z" transform="translate(-16391.479 -12914.656)"/>
                <path id="패스_6335" className="fill" data-name="패스 6335" d="M618.184,626.267h-.6a3.6,3.6,0,1,1,0-7.2h.6Zm-1.2-5.924a2.4,2.4,0,0,0,0,4.648Z" transform="translate(-16391.184 -12914.666)"/>
                <path id="패스_6336" className="fill" data-name="패스 6336" d="M607.833,626.756a4.1,4.1,0,1,1,4.1-4.1A4.1,4.1,0,0,1,607.833,626.756Zm0-7a2.9,2.9,0,1,0,2.9,2.9A2.9,2.9,0,0,0,607.833,619.756Z" transform="translate(-16391.332 -12914.655)"/>
                <rect id="사각형_6575" className="fill" data-name="사각형 6575" width="1.2" height="17.913" transform="translate(-15784.098 -12300.912)"/>
                </g>
              </g>
            </svg>
          승부예측
        </div>
        <Button shape='circle' className='bottom-btn'><span>6</span><span className='bottom-btn-date'>12.15</span></Button>
        <div className='his-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className="css-1ytxq94">
            <g id="그룹_6744" data-name="그룹 6744" transform="translate(-2731 -5902)">
              <rect id="사각형_6317-12" data-name="사각형 6317-12" width="22" height="22" transform="translate(2731 5902)" opacity="0"></rect>
              <path id="패스_5723" className="fill" data-name="패스 5723" d="M108.284,509.426c-2.2,0-4.406.016-6.609,0a3.012,3.012,0,0,1-3.315-3.273q-.038-6.716,0-13.431a3,3,0,0,1,2.745-3.235,2.944,2.944,0,0,1,.5,0c2.093-.029,4.187-.043,6.278.028.4.013,1.067.411,1.106.7.1.76-.581.773-1.151.773-1.982,0-3.965-.008-5.948.006-1.469.01-2,.53-2.006,1.991q-.018,6.5,0,12.99c0,1.4.537,1.93,1.943,1.935q6.5.02,13,0c1.458,0,1.957-.521,1.977-2.017.019-1.431,0-2.862.013-4.293,0-.56,0-1.222.771-1.206s.741.68.743,1.237c0,1.541.029,3.083-.01,4.623a3.012,3.012,0,0,1-2.846,3.169,3.313,3.313,0,0,1-.359,0C112.838,509.446,110.561,509.425,108.284,509.426Z" transform="translate(2633.658 5413.554)" fill="#1c202b"/>
              <path id="패스_5724" className="fill" data-name="패스 5724" d="M108.238,500.93c2.347-2.371,4.507-4.556,6.67-6.736a5.151,5.151,0,0,1,1.05-.955,1.01,1.01,0,0,1,.949.045c.174.178.1.64.06.968-.019.149-.221.28-.351.409-2.486,2.486-4.985,4.959-7.453,7.463a1.1,1.1,0,0,1-1.847,0c-1.061-1.113-2.174-2.177-3.253-3.272-.4-.41-.994-.871-.414-1.472s1.056-.05,1.469.369C106.113,498.754,107.1,499.773,108.238,500.93Z" transform="translate(2633.658 5413.554)" fill="#1c202b"></path>
            </g>
          </svg>
          베팅내역
        </div>
        <div className='menu-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className="css-su4z1q" fill='rgb(111, 119, 126)'>
            <g id="그룹_6957" data-name="그룹 6957" transform="translate(15761.999 12301.999)">
              <rect id="사각형_6570" data-name="사각형 6570" width="22" height="22" transform="translate(-15761.999 -12301.999)" fill="rgba(0,136,255,0)"/>
              <g id="그룹_6954" data-name="그룹 6954">
                <path id="패스_6329" className="fill" data-name="패스 6329" d="M676.833,621.267h-3a2.1,2.1,0,0,1-2.1-2.1v-3a2.1,2.1,0,0,1,2.1-2.1h3a2.1,2.1,0,0,1,2.1,2.1v3A2.1,2.1,0,0,1,676.833,621.267Zm-3-6a.9.9,0,0,0-.9.9v3a.9.9,0,0,0,.9.9h3a.9.9,0,0,0,.9-.9v-3a.9.9,0,0,0-.9-.9Z" transform="translate(-16431.332 -12913.666)"/>
                <path id="패스_6330" className="fill" data-name="패스 6330" d="M676.833,631.267h-3a2.1,2.1,0,0,1-2.1-2.1v-3a2.1,2.1,0,0,1,2.1-2.1h3a2.1,2.1,0,0,1,2.1,2.1v3A2.1,2.1,0,0,1,676.833,631.267Zm-3-6a.9.9,0,0,0-.9.9v3a.9.9,0,0,0,.9.9h3a.9.9,0,0,0,.9-.9v-3a.9.9,0,0,0-.9-.9Z" transform="translate(-16431.332 -12913.666)"/>
                <path id="패스_6331" className="fill" data-name="패스 6331" d="M686.833,621.267h-3a2.1,2.1,0,0,1-2.1-2.1v-3a2.1,2.1,0,0,1,2.1-2.1h3a2.1,2.1,0,0,1,2.1,2.1v3A2.1,2.1,0,0,1,686.833,621.267Zm-3-6a.9.9,0,0,0-.9.9v3a.9.9,0,0,0,.9.9h3a.9.9,0,0,0,.9-.9v-3a.9.9,0,0,0-.9-.9Z" transform="translate(-16431.332 -12913.666)"/>
                <path id="패스_6332" className="fill" data-name="패스 6332" d="M686.833,631.267h-3a2.1,2.1,0,0,1-2.1-2.1v-3a2.1,2.1,0,0,1,2.1-2.1h3a2.1,2.1,0,0,1,2.1,2.1v3A2.1,2.1,0,0,1,686.833,631.267Zm-3-6a.9.9,0,0,0-.9.9v3a.9.9,0,0,0,.9.9h3a.9.9,0,0,0,.9-.9v-3a.9.9,0,0,0-.9-.9Z" transform="translate(-16431.332 -12913.666)"/>
              </g>
            </g>
          </svg>
          메뉴
        </div>
    </div>
  );
}

export default BottomBar;

