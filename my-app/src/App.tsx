// import React from 'react';
// import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
// import Button from 'antd/es/button';
import ZHeader from './main/ZHeader';
import ClubNotice from './main/ClubNotice';
import NoticeBar from './main/NoticeBar';
import MatchTab from './main/MatchTab';
import MainBanner from './main/MainBanner';
import DividendBoard from './main/DividendBoard';
import BottomBar from './main/BottomBar'
import FixedElement from './main/FixedElement'
import 'animate.css';

function App() {
  return (
    <div className="App">
      <ZHeader />
      <NoticeBar />
      <ClubNotice />
      <MatchTab />
      <MainBanner />
      <div style={{ paddingBottom: "calc(40% + 9px)"}}/>
      <DividendBoard />
      <DividendBoard />
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      {/* <p style={{width:'100%', height:'1200px'}}/> */}
      <div style={{height: "70px"}}/>
      <BottomBar />
      <FixedElement />
    </div>
  );
}

export default App;

