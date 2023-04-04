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
      {/* <div className='flex-banner'>
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
      </div> */}
      <section id="banner">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={14}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="#" className='banner-img1'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img2'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img3'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img1'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img2'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img3'></a>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default MainBanner;

