import '../App.css';
import '../style/style.css'
import { Affix, Button } from 'antd';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


function MainBanner() {
  return (
    <div className="MainBanner">
      <div className='flex-banner'>
        <ul className='banner-list'>
          <li>
            <a href="#" className='banner-img1'>
            </a>
          </li>
          <li>
            <a href="#" className='banner-img2'>
            </a>
          </li>
          <li>
            <a href="#" className='banner-img3'>
            </a>
          </li>
          <li>
            <a href="#" className='banner-img4'>
            </a>
          </li>
        </ul>
      </div>
      {/* <section id="banner">
        <Swiper
          slidesPerView={1.8}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
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

