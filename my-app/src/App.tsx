// import React from 'react';
// import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
// import Button from 'antd/es/button';
import ZHeader from './main/ZHeader';
import NoticeBar from './main/NoticeBar';
import ClubNotice from './main/ClubNotice';
import MatchTab from './main/MatchTab';
import BottomBar from './main/BottomBar'
import FixedElement from './main/FixedElement'
// import 'animate.css';

function App() {
  return (
    <div className="App">
      <ZHeader />
      <NoticeBar />
      <ClubNotice />
      <MatchTab />
      <BottomBar />
      <FixedElement />
    </div>
  );
}

export default App;

