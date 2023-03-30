import '../App.css';
import '../style/style.css'
import { Affix, Button } from 'antd';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/dist/css/swiper.css"
// import 'swiper/swiper.scss';
// import 'swiper/css/swiper.css';

// import "../styles.css";


function MainBanner() {
  return (
    // swiper 경로 오류로 인해 크기만 맞춰놓고 수정 예정
    <div className="MainBanner">
      <div
        style={{
          width:'100%',
          height:'145px',
          backgroundColor:'#ffffff50',
        }}
      />
      {/* <section id="banner">
        <Swiper className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section> */}
    </div>
  );
}

export default MainBanner;

