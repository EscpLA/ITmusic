<template>
  <div>
    <Header></Header>
    <div class="w">
      <personalIntro />
      <myFollow />
      <MyFans />
      <MyLikeSongs />
      <LikeAlbum :songList="personSongs" :obj="albumObj"></LikeAlbum>
      <!-- 喜欢的歌单 -->
      <LikeAlbum :songList="personSongs" :obj="songObj"></LikeAlbum>
      <!-- 我的歌单 -->
      <MySongList :songList="personSongs" :SongListobj="songListObj"></MySongList>
      <albumFooter/>
    </div>
  </div>
</template>

<script>
// import personalIntro from '../components/personal-info/personalIntro';
import personalIntro from "../components/personal-info/personalIntro";
import myFollow from "../components/personal-info/myFollow.vue";
import Header from "../components/Header";
import MyLikeSongs from "../components/personal-info/MyLikeSongs";
import MyFans from "../components/personal-info/MyFans";
import albumFooter from "../components/albumFooter"

// import personalIntro from '../components/personal-info/personalIntro';
import LikeAlbum from "../components/personal-info/LikeAlbum";
import albumImg from "../img/矢量图/专辑，光盘.png";
import songImg from "../img/矢量图/歌单.png";
import MySongList from "../components/personal-info/MySongList";
// import axios from "axios";

export default {
  name: "personalInfo",
  components: {
    personalIntro,
    myFollow,
    Header,
    MyLikeSongs,
    MyFans,
    LikeAlbum,
    MySongList,
    albumFooter,
  },
  data() {
    return {
      personSongs:[ {
            "id": 2,
            "song_name": "安静",
            "song_url": "song/20210315/安静-周杰伦.mp3",
            "play_count": 111,
            "lyric": "",
            "album_id": 2
        },
        {
            "id": 7,
            "song_name": "风再起时",
            "song_url": "song/20210315/风再起时-张国荣.mp3",
            "play_count": 99,
            "lyric": "",
            "album_id": 3
        },
        {
            "id": 9,
            "song_name": "共同渡过",
            "song_url": "song/20210315/共同渡过国语-张国荣.mp3",
            "play_count": 99,
            "lyric": "",
            "album_id": 3
        },
        {
            "id": 6,
            "song_name": "简单爱",
            "song_url": "song/20210315/简单爱-周杰伦.mp3",
            "play_count": 88,
            "lyric": "song/lyric/20210316/简单爱.txt",
            "album_id": 2
        },
        {
            "id": 3,
            "song_name": "对不起",
            "song_url": "song/20210315/对不起-周杰伦.mp3",
            "play_count": 2,
            "lyric": "",
            "album_id": 2
        },
        {
            "id": 8,
            "song_name": "倩女幽魂",
            "song_url": "song/20210315/倩女幽魂国语电影倩女幽魂片尾曲-张国荣.mp3",
            "play_count": 1,
            "lyric": "",
            "album_id": 3
        }],

      albumObj: {
        title: "喜欢的专辑",
        img: albumImg,
      },
      songObj: {
        title: "喜欢的歌单",
        img: songImg,
        color: ["filter:invert(100%)", "height:30px", "width:30px"],
      },
      songListObj: {},
    };
  },
//   created() {
//     axios.get("hit_songs").then((res) => {
//       // console.log(res.data);
//       // this.photolist=res.data
//       this.personSongs = res.data.slice(0, 10);
//     });
//   },
};
</script>

<style></style>
