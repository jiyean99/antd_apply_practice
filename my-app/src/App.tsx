// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from 'antd/es/button';
import ZHeader from './main/ZHeader';
import ClubNotice from './main/ClubNotice'
import NoticeBar from './main/NoticeBar'
import MatchTab from './main/MatchTab'
import MainBanner from './main/MainBanner'
import DividendBoard from './main/DividendBoard'

function App() {
  return (
    <div className="App">
      <ZHeader />
      <NoticeBar />
      <ClubNotice />
      <MatchTab />
      <MainBanner />
      <DividendBoard />
      <div
      style={{
        width:'100%',
        height:'2000px',
        backgroundColor:'rgba(0,0,0,0.6)'
      }}/>
    </div>
  );
}

export default App;

