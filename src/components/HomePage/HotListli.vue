<template>
  <div class="HotListli d-flex">
    <div
      class="img-container d-flex"
      :style="{ backgroundImage: 'url(' + obj3.url + ')' }"
    >
      <img :src="obj3.img" :style="{ width: obj3.width, height: obj3.height }" />
    </div>
    <div class="d-flex">
      <div class="hot-song d-flex">
        热歌榜
        <div class="small-img d-flex">
          <img src="../../img/矢量图/播放量.png" alt="" />播放
        </div>
        <div class="small-img d-flex second">
          <img src="../../img/矢量图/收藏.png" alt="" />收藏
        </div>
      </div>
    </div>
    <ul class="d-flex">
      <li v-for="(itrm, index) in obj2" :key="index" class="list-style d-flex">
        <p
          :style="{
            color: index < 3 ? '#659274' : '#FFFFFFFF',
            fontSize: index < 3 ? '24' + 'px' : '18' + 'px',
          }"
        >
          {{ index + 1 }}
        </p>
        <p class="li-p1">{{ obj2[index].id }}</p>
        <p class="li-p2">{{ obj2[index].id }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  props: {
    obj2: Array,
    obj3: Object,
  },
  methods: {},
  data() {
    return {
      isTrue: false,
      photolist: [],
    };
  },
};
</script>
<style scoped>
.li-p2 {
  text-align: left;
  font-size: 14px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #ffffff;
}

.li-p1 {
  width: 159px;
  text-align: center;
  font-size: 14px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #ffffff;
  margin-left: 57px;
  text-align: left;
}

p {
  width: 9px;
}
ul {
  margin-left: 23px;
  width: 335px;
  height: 300px;
  background: #21262c;
  box-shadow: 0px 0px 7px 2px #000000;
  border-radius: 0px 0px 20px 20px;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 25px;
}
li {
  margin-left: 41px;
  margin-right: 34px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.HotListli {
  margin-left: 48px;
  margin-top: 48px;
}
img {
  width: 39px;
  height: 39px;
}
.img-container {
  width: 91px;
  height: 91px;
  background: #ffffff;
  border-radius: 8px 5px 5px 5px;

  align-items: center;
  justify-content: center;
}
.small-img > img {
  width: 17px;
  height: 17px;
}
.small-img {
  width: 47px;
  height: 13px;
  font-size: 12px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #ffffff;
  justify-content: space-between;
  margin-top: 9px;
}
.hot-song {
  flex-direction: column;
  justify-content: start;
  width: 57px;
  font-size: 18px;
  font-family: HYGangYiTiJ;
  font-weight: 400;
  color: #ffffff;
  margin-left: 10px;
}
</style>
