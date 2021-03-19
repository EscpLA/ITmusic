<template>
  <div>
    <div class="container">
      <div class="title">
        <div class="imgBox fl">
          <img src="../../../images/img/列表.png" alt="" class="listImg" />
        </div>
        <div class="title-words">
          <p class="fs-24 fw-b style-black fs">歌曲列表</p>
          <div class="green-line"></div>
        </div>
      </div>
      <div class="songs">
        <div class="example">
          <p class="name fs-18 style-black fw-b">歌曲名</p>
          <p class="album fs-18 style-black fw-b">专辑</p>
          <p class="duration fs-18 style-black fw-b">时长</p>
        </div>
        <songListComponent index=0 />
        
      </div>
      <div class="pages">
        <ul>
          <li class="pre fl fs-10 fw-b style-white">上一页</li>
          <li class="fl fs-18 fw-b numbers">1</li>
          <li class="fl fs-18 fw-b numbers">2</li>
          <li class="fl fs-18 fw-b numbers">3</li>
          <li class="fl fs-18 fw-b numbers">4</li>
          <li class="fl fs-18 fw-b numbers">...</li>
          <li class="next fl fs-10 fw-b style-white">下一页</li>
          <li class="last fl fs-10 fw-b style-white">尾页</li>
        </ul>
        <div class="search clearfix">
          <input type="number" class="fs-10 style-grey fl" placeholder="页码" />
          <div class="bg-green switch-btn fl style-white fs-18">
            <img src="../../../images/img/angle-right.png" alt="" />
          </div>
        </div>
      </div>
      <div class="title">
        <div class="imgBox fl">
          <img src="../../../images/img/评论.png" alt="" class="commentsImg" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import songListComponent from './songListComponents/songsListComponent'
export default {
  name: "songsList",
  components: {
    songListComponent
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 35px;
}
.container .title .title-words {
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
  line-height: 50px;
}
.container .title .imgBox {
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 9px;
  background: #21262c;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.51);
  border-radius: 25px;
  text-align: center;
}
.container .title .imgBox > img {
 
  filter: invert(100%);
}
.listImg {
    position: absolute;
    width: 28px;
    height: 25.5px;
    top: 11.5px;
    left: 11.5px;}
.commentsImg {
    position: absolute;
    width: 35px;
    height: 36px;
    left: 8px;
    top: 10px;
}
.container .songs {
  width: 1192px;
  border: 4px solid #21262c;
  border-radius: 10px;
}
.container .songs div:nth-child(2n) {
  background: #efefef;
}
.container .songs div:nth-child(2n + 1) {
  background: #fff;
}

.container .songs div:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.container .songs div:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.container .songs .example,
.container .songs .song {
  position: relative;
  height: 50px;
}
.container .songs .name {
  position: absolute;
  left: 110px;
  top: 15px;
}
.container .songs .album {
  position: absolute;
  left: 385px;
  top: 15px;
}
.container .songs .duration {
  position: absolute;
  left: 715px;
  top: 15px;
}
.pages {
  margin-top: 25px;
  margin-bottom: 25px;
}
.pages .pre,
.next,
.last {
  width: 50px;
  height: 20px;
  background: #659274;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.58);
  border-radius: 10px;
  line-height: 20px;
  text-align: center;
}
.pages .pre {
  margin-left: 378px;
  margin-right: 30px;
}
.pages .numbers {
  margin-right: 18px;
}
.pages .next {
  margin: 0px 10px 0px 30px;
}
.pages .search input {
  width: 43px;
  height: 21px;
  margin-left: 30px;
  line-height: 21px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
}
.pages .search .switch-btn {
  position: relative;
  width: 20px;
  height: 20px;
  padding-bottom: 0px;
  padding-left: 0px;
  line-height: 20px;
  text-align: center;
  margin-left: 5px;
  border-radius: 10px;
}
.pages .search .switch-btn img {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  filter: invert(100%);
}
</style>
