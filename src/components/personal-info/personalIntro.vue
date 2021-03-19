<template>
  <div class="album-intro">
    <div class="intro-container style-white">
      <div class="ablum-info clearfix">
        <div class="cover fl">
          <img
            src="../../../images/upload_img/图片/mt-fuji-japan-view-from-kitadake-fuji-red-fuji-thumb.jpg"
            alt=""
          />
        </div>
        <div class="info fl">
          <div class="name fs-24 fw-b fl">{{ user.username }}</div>
          <div class="singer fs-18 fw-l">{{ user.age }} 岁</div>
          <div class="date fs-18 fw-l">{{ user.region }}</div>
          <div class="intro fs-18 fw-l">
            {{ user.selfIntro }}
          </div>
          <div class="album-perf">
            <div class="views fl">
              <p class="fs-18 style-white fl">关注</p>
              <p class="fs-24 style-green style-impact fl number">
                {{ user.follow_count }}
              </p>
            </div>
            <div class="likes fl">
              <p class="fs-18 style-white fl">粉丝</p>
              <p class="fs-24 style-green style-impact fl number">{{ user.fan_count }}</p>
            </div>
            <div class="fl">
              <p class="fs-18 style-white fl lh-36">回复</p>
              <p class="fs-24 style-green style-impact fl number">
                {{ user.reply_count }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalIntro",
  data() {
    return {
      user: {
        username: "用户名",
        avater_url: "头像路径",
        age: 20,
        region: "山东 青岛",
        selfIntro:
          "这是一个个人介绍，不要不相信，这真的是一个个人介绍，我不想编了真的太难了，可是我还在编这是为什么呢？我也不知道为什么但就是编到这里了。",
        follow_count: 24,
        fan_count: 12,
        reply_count: "100+",
      },
    };
  },
};
</script>

<style>
.album-intro {
  background-color: #21262c !important ;
}
.intro-container {
  width: 1314px;
  margin: 0 auto;
  height: 423px;
  padding-top: 72px;
}
.ablum-info .cover {
  width: 232px;
  height: 315px;
  margin-left: 61px;
  margin-right: 77px;
  background: #659274;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.6);
}
.ablum-info .cover img {
  width: 220px;
  height: 300px;
  margin: 6px 6px;
  border-radius: 10px;
}
.ablum-info .name {
  margin-right: 13px;
  margin-bottom: 6px;
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
  padding-top: 46px;
}
.ablum-info .info .singer {
    margin: 50px 0px 5px;
}
.ablum-info .info .date {
  margin-bottom: 16px;
}
.ablum-info .info .album-perf {
  margin-top: 26px;
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
