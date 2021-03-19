<template>
    <div class="HotSong">
        <HomeTitle :obj="tileObj"></HomeTitle>
        <ul class="d-flex hotsong-ul" >
            <li class="list-style" v-for="(item,index) in photolist" :key="index" >
                <div :style="{backgroundImage: 'url('+ item.song_url +')'}" class="img-box">
                 </div>
                <p class="song-name">{{item.song_name}}</p>
                <p class="song-introduce">{{item.description}}</p>
                <div class="list-fonter d-flex"><img src="../../img/矢量图/播放量.png" alt="" class="view-counts"><span>{{item.play_count}}</span>
                <img src="../../img/矢量图/评论.png" alt="" class="comment">{{item.play_count}}
                </div>
                </li>
        </ul>
    </div>
</template>
<style scoped>
.list-fonter{
    width: 178px;
    height: 25px;
    font-size: 12px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #FFFFFF;
    margin-top: 12px;
    margin-left: 12px;
    align-items: center;
}
.view-counts{
    height: 19px;
    width: 19px;
    margin: 0;
    margin-right: 3px;
}
.comment{
    margin: 0;
    margin-left: 20px;
    margin-right: 3px;
    width: 21px;
    height: 17px;
}
.HotSong{
    padding-left: 59px;
    padding-right: 59px;
}
ul{
    margin-top: 34px;
    justify-content: space-between; 
    flex-wrap: wrap;
    align-content: space-between;
    height: 635px;
}
li{
    width: 200px;
    height: 300px;
    background: #21262C;
    border-radius: 5px;
    box-shadow:3px 3px 3px rgba(11, 233, 40, 0.3);
}
.img-box{
    width: 178px;
    height: 178px;
    margin: 16px 11px 20px 11px;
}
.song-name{
    height: 18px;
    font-size: 18px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #FFFFFF;
    margin-left: 13px;
}
.song-introduce{
    height: 15px;
    font-size: 14px;
    width: 178px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #FFFFFF;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 7px;
    margin-left: 13px;
}
.hotsong-ul{
    margin-bottom: 47px;
}
</style>
<script>
import axios from 'axios'
import HomeTitle from '../HomePage/HomeTitle'
import img from '../../img/矢量图/歌单.png'
export default {
    name:'HotSong',
    components:{
        HomeTitle
    },
    data(){
        return{
            tileObj:{
                title:'热门歌单',
                titleimg:img
            },
            photolist:[],
            
        }
    },
    methods:{
    },
    created(){
            axios.get('hit_songs')
            .then(res =>{
                // console.log(res.data);
                // this.photolist=res.data
                this.photolist=res.data.slice(0,10);
                console.log(this.photolist);
                console.log(this.photolist[0].song_url);
            })
    },
 
}
</script>