<template>
  <div class="myFollow">
    <div class="container">
        <HomeTitle :obj="followObj" :style="{'backgoung-iamge' : 'url(coverImg)'}"/>
        <div class="userContainer">
            <div class="user">
            <div class="avater fl">
                <!-- <img :src="follows.avater" alt=""> -->
                <img src="../../../images/upload_img/图片/tianjin-twilight-city-scenery-preview.jpg" alt="">
            </div>
            <div class="singer-info">
                <div class="name">
                    <p class="fs-18 fw-b style-white">{{follows.nickname}}</p>
                    <p class="fs-18 fw-b style-white">歌手名</p>
                </div>
                <div class="intro">
                    <!-- <p class="fs-14 fw-l  style-white">{{follows.intro}}</p> -->
                    <p class="fs-14 fw-l  style-white">歌手简介</p>
                </div>
                <div class="info">
                    <div class="fan">
                        <div class="fs-14 fw-l style-white fl pr-5">粉丝</div>
                        <p class="fs-18 style-white style-impact ">1293</p>
                    </div>
                    <div class="follow ">
                        <div class="fs-14 fw-l style-white fl pr-5">关注</div>
                        <p class="fs-18 style-white style-impact">2</p>
                    </div>
                    <div class="ablum-count ">
                        <div class="fs-14 fw-l style-white fl pr-5">专辑</div>
                        <p class="fs-18 style-white style-impact">13</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import HomeTitle from '../HomePage/HomeTitle';
import followImg from '../../../images/img/关注.png'
export default {
  name: "myFollow",
  components: {
      HomeTitle,
  },
  data() {
      return {
          followObj: {
              title: '我的关注',
              titleimg: followImg,
              color: 'filter: invert(100%)'
          },
          follows: [
              {
                pk: "用户id",
                nickname: "昵称",
                avater: "头像路径",
                avaterCover: "背景头像背景图片"
              }
          ]
      }
  },
};
</script>
<style>
.myFollow .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1195px;
  margin: 0 auto;
  margin-top: 17px;
}
.myFollow .container .userContainer {
    margin-top: 15px;
    width: 100%;
}
.myFollow .container .user {
  width: 387px;
  height: 162px;
  margin-bottom: 20px;
  background-color: pink;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.66);
  border-radius: 5px;
}
.myFollow .container .user .avater {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 36px;
    margin-right: 11px;
}
.myFollow .container .user .avater img {
    width: 84px;
    height: 84px;
    border-radius: 42px;
}
.myFollow .container .user .singer-info {
    padding-top: 45px;
}
.myFollow .container .user .singer-info .name {
    margin-bottom: 6px;
}
.myFollow .container .user .singer-info .intro {
    margin-bottom: 3px;
}
.myFollow .container .user .singer-info .info {
    display: flex;
}
.myFollow .container .user .singer-info .info > div {
    line-height: 14px;
    width: 100%;
}
.myFollow .container .user .singer-info .info .fan,
.myFollow .container .user .singer-info .info .follow,
.myFollow .container .user .singer-info .info .album-count > div{
    padding-right: 5px;
}
.pr-5 {
    padding-right: 5px;
}
</style>
