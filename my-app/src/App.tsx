// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from 'antd/es/button';
import ZHeader from './main/ZHeader';
import ClubNotice from './main/ClubNotice';
import NoticeBar from './main/NoticeBar';
import MatchTab from './main/MatchTab';
import MainBanner from './main/MainBanner';
import DividendBoard from './main/DividendBoard';
import BottomBar from './main/BottomBar'
function App() {
  return (
    <div className="App">
      <ZHeader />
      <NoticeBar />
      <ClubNotice />
      <MatchTab />
      <MainBanner />
      <DividendBoard />
      <DividendBoard />
      <DividendBoard />
      <DividendBoard />
      <BottomBar />
    </div>
  );
}

export default App;

