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

function App() {
  return (
    <div className="App">
      <ZHeader />
      <NoticeBar />
      <ClubNotice />
      <MatchTab />
      <MainBanner />
      <div style={{marginBottom: "35%"}}/>
      <DividendBoard />
      <DividendBoard />
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <DividendBoard/>
      <BottomBar />
      <FixedElement />
    </div>
  );
}

export default App;

