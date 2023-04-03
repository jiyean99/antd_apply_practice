// 기존 js파일에 작성되어 있던 스크립트

// import $ from 'jquery';
import React from 'react';
import $ from 'jquery';
import 'jquery';
// import $ from '../../node_modules/@types/jquery';

// Main-tab관련 스크립트는 MatchTab컴포넌트상에서 아예 삭제하였습니다
// // Main-tab 관련 스크립트
// $(function () {
//     $(".main-tab>li").click(function (e) {
//         e.preventDefault();
//         $(".main-tab>li").removeClass("main-tab-on")
//         $(this).addClass("main-tab-on")
//     });
// });

// Sport-panel tab 관련 스크립트
$(function () {
    $(".sport-panel>li").click(function (e) {
        e.preventDefault();
        $(".sport-panel>li").removeClass("tab-active")
        $(this).addClass("tab-active")
    });
});
