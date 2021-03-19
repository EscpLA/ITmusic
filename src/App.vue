<template>
  <div id="nav">
    <!-- <Nav></Nav> -->
    <Header></Header>
    <router-link to="/"></router-link>
    <router-view/> 
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
.text-center{
  text-align: center;
}
.homepage-container{
  margin: 0 auto;
  width: 1314px;
  box-shadow:2px 2px 20px 2px rgba(0,0,0,0.3);
  padding-top: 47px;
}
.list-style{
  list-style: none;
}
.d-flex{
  display: flex;
}
.d-inblock{
  display: inline-block;
}
/* css初始化 start */
* {
  margin: 0;
  padding: 0;
}
em,
i {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
button {
  cursor: pointer;
}
a {
  color: #666;
  text-decoration: none;
}
a:hover {
  color: #c81623;
}
button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53",
    sans-serif;
  /* 默认黑色边框 */
  border: 0;
  outline: none;
}
input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
body {
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53",
    sans-serif;
  color: #666;
}
.hide,
.none {
  display: none;
}
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}
.clearfix {
  *zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
/* css初始化 end */
/* 全局CSS start */
.style-green {
  color: #659274;
}
.style-white {
  color: #fff;
}
.style-black {
  color: #21262c;
}
.style-grey {
  color: #999999;
}
.bg-green {
  background-color: #659274;
}
.bg-black {
  background: #21262c;
}
.bg-grey {
  background-color: #EFEFEF;
}
/* 字体大小 strat */
.fs-5 {
  font-size: 5px;
}
.fs-7 {
  font-size: 7px;
}
.fs-8 {
  font-size: 8px;
}
.fs-9 {
  font-size: 9px;
}
.fs-10 {
  font-size: 10px;
}
.fs-12 {
  font-size: 12px;
}
.fs-14 {
  font-size: 14px;
}
.fs-16 {
  font-size: 16px;
}
.fs-18 {
  font-size: 18px;
}
.fs-24 {
  font-size: 24px;
}
/* 字体大小 end */
/* 行高 start */
.lh-20 {
  line-height: 20px;
}
.lh-30 {
  line-height: 30px;
}
.lh-36 {
  line-height: 36px;
}
.lh-50 {
  line-height: 50px;
}
.lh-66 {
  line-height: 66px;
}
.lh-30 {
  line-height: 30px;
}
/* 行高 end */
/* 字重 start */
.fw-l {
  font-weight: 300;
}
.fw-b {
  font-weight: bold;
}
/* 字重 end */
/* 字体类型 start */
.style-impact {
  font-family: impact;
}
/* 字体类型 end */
.w {
  width: 1314px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 2px 27px 0px rgba(0, 0, 0, 0.47);
}
.green-line {
  position: absolute;
  z-index: -1;
  left: 57px;
  bottom: 7px;
  width: 104px;
  height: 11px;
  background: #659274;
  border-radius: 5px;
}
/* 全局CSS end */
</style>
<script>
// import Nav from './components/Nav'
import Header from './components/Header'
export default {
  coomponents:{
    // Nav,
    Header,
  }
}
</script>
