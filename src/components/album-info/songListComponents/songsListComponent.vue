<template>
  <div class="song">
    <p class="name fs-18 style-black fw-b">{{ songs[index].song_name }}</p>
    <p class="album fs-18 style-black fw-b">{{ songs.album }}</p>
    <p class="duration fs-18 style-black fw-b">{{ songs.duration }}</p>
    <div class="store-up fr"><img src="../../../../images/img/收藏.png" alt=""></div>
    <div class="play fr"><img src="../../../../images/img/播放量.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "songListComponent",
  props: {
    index: Number,
  },
  data() {
    return {
      songs: [
        {
          id: "歌曲id",
          song_name: "歌曲名",
        },
      ],
    };
  },
};
</script>

<style>
/* 由外面复制过来的样式 */
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
.song .play {
  margin-top: 15.5px;
  margin-right: 15px;
}
.song .store-up {
  margin-top: 15.5px;
  margin-right: 155px;
}
.song .play img {
  width: 19px;
  height: 19px;
}
.song .store-up img {
  width: 19px;
  height: 19px;
}
</style>
