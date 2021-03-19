<template>
  <div class="album-intro">
    <div class="intro-container style-white">
      <div class="ablum-info clearfix">
        <div class="cover fl">
          <img
            src="../../../images/upload_img/图片/marek-piwnicki-JnXebVlsVrg-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="info fl">
          <div class="name fs-24 fw-b fl">{{ album.name }}</div>
          <div class="likeAlbum"><img src="../../../images/img/喜欢.png" alt="" /></div>
          <div class="singer fs-18 fw-l">{{ album.singer }}</div>
          <div class="date fs-18 fw-l">{{album.upload_time}}</div>
          <div class="intro fs-18 fw-l">
            {{ album.description }}
          </div>
          <div class="album-perf">
            <div class="views fl">
              <p class="fs-18 style-white fl">播放</p>
              <p class="fs-24 style-green style-impact fl number">1000</p>
            </div>
            <div class="likes fl">
              <p class="fs-18 style-white fl">喜欢</p>
              <p class="fs-24 style-green style-impact fl number">100</p>
            </div>
            <div class="fl">
              <p class="fs-18 style-white fl">评论</p>
              <p class="fs-24 style-green style-impact fl number">235</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "albumIntro",
  /* props: {
    albumName: String,
    description: String,
    upload_time:String,
    singer:String,
  }, */
  data() {
    return {

    "album":{
        name :'专辑名',
        description: "这是一个关于专辑的介绍，大家好我又来了，我又来凑字数了，至于具体怎么凑字数我还在思考，这真的不是一个简单的问题，真是让人掉头发，我瞅瞅我凑字数凑得咋样啦？好像还差一点点，应该差不多了。",
        album_pictur: "专辑封面路径",
        singer: "歌手",
        upload_time: "发行时间",
        songs:[
            {
                id: "歌曲id",
                song_name: "歌曲名"
            }
        ]
}
    }
  }
};
</script>
<style>
.album-intro {
  width: 100%;
  background-color: cornsilk;
  background: url("../../../images/upload_img/图片/marek-piwnicki-JnXebVlsVrg-unsplash 拷贝.png")
    no-repeat;
  background-size: 100% 100%;
}
.intro-container {
  width: 1314px;
  margin: 0 auto;
  height: 423px;
  padding-top: 72px;
}
.ablum-info .cover {
  width: 346px;
  height: 346px;
  margin-left: 61px;
  margin-right: 77px;
  border-radius: 173px;
  background-color: pink;
}
.ablum-info .cover img {
  width: 346px;
  height: 346px;
  border-radius: 173px;
}
.ablum-info .name {
  margin-right: 13px;
}
.ablum-info .likeAlbum {
  overflow: hidden;
  /* height: 24px; */
  margin: 6px 0px 6px;
}
.ablum-info .likeAlbum img {
  width: 28px;
  height: 24px;
  transform: translateY(-24px);
  filter: drop-shadow(#659274 0 24px);
}
.ablum-info .info {
  width: 752px;
  height: 163px;
  padding-top: 60px;
}
.ablum-info .info .date {
  margin-top: 8px;
}
.ablum-info .info .album-perf {
  margin-top: 15px;
}
.ablum-info .info .album-perf > div {
  margin-right: 26px;
}
.views,
.likes,
.comments :first-child {
  line-height: 36px;
}
.number {
  margin-left: 10px;
}
</style>
