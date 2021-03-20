<template>
    <div class="Like-Album" >
        <HomeTitle :obj="tileObj" class="title"></HomeTitle>
        <ul>
            <li v-for="(item,index) in songList" :key="index" class="d-flex" :style="{backgroundColor: (index+1)%2!=0 ? '#efefef' : ''}">
                <img src="../../img/图片/kristina-manchenko-xeq-0jqUcKc-unsplash.jpg" alt="" class="hovered-img">
                <div class="hovered-div"><div class="song-name">{{item.song_name}}</div>
                <div class="writer-name">writer-name</div>
                <div class="data">data</div>
                <div class="introduce">关于专辑的简要介绍。</div>
                </div>
                <div class="hovered-fonter">
                <div class="attention">关注&nbsp;&nbsp;<span>{{item.play_count}}</span></div>
                <div class="comment">关注&nbsp;&nbsp;<span>{{item.id}}</span></div>
                <div class="icon d-flex"><img src="../../img/矢量图/播放量.png" alt="" class="play">
                <img src="../../img/矢量图/收藏拉宽.png" alt="" class="collect">
                </div>
                </div>
                </li>
        </ul>
    </div>
</template>
<script>
import HomeTitle from '../HomePage/HomeTitle'
import img from '../../img/矢量图/我的.png'
export default {
    props:{
        songList:Array,
    },
    data(){
        return{
            tileObj:{
                title:'我的歌单',
                titleimg:img,
                color:['filter:invert(100%)','height:30px',
                'width:30px'],
            },
        }
    },
    components:{
        HomeTitle,
    }
}
</script>
<style scoped>
.hovered-fonter{
    display:flex;
    align-items: center;
}
.hovered-div{
    display: flex;
}
ul{
    width: 1198px;
    justify-content: center;
    margin-top: 26px;
}
/* li在点击前的效果 */
.introduce{
    display: none;
}
li{
    width: 1197px;
    height: 50px;
    background: #FFFFFF;
    align-items: center;
}
.hovered-img{
    display: none;
    width: 167px;
    height: 167px;
    border-radius: 50%;
    margin-top: 26px;
}
.song-name{
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #21262C;
    margin-left: 69px;
    width: 140px;
    text-align: left;
}
.writer-name{
font-size: 16px;
font-family: Microsoft YaHei UI;
font-weight: 300;
color: #21262C;
margin-left: 69px;
width: 140px;
text-align-last: left;
}
.data{
    margin-left: 31px;
    text-align: left;
    font-size: 16px;
    width: 75px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #21262C;
}
.attention{
    margin-left: 411px ;
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #21262C;
    width: 71px;
    text-align: left;
}
.comment{
    margin-left: 22px;
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #21262C;
    width: 53px;
    text-align: left;
}
.icon{
    width: 42px;
    justify-content: space-between;
    margin-left: 49px;
}
.icon>img{
    cursor: pointer;
    height: 18px;
}
.play{
    width: 18px;
}
.collect{
    width: 14px;
}
/* li在点击后的效果 */
li:hover{
    width: 1198px;
    height: 222px;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.34);
    transition: 0.5s all;
    align-items: start;
}
li:hover .hovered-img{
    display: flex;
    transition: all 0.5s;
    margin-left: 21px;
}
li:hover .hovered-div{
    width: 300px;
    flex-wrap: wrap;
    transition: all 0.5s;
}
li:hover .song-name{
    margin-left: 78px;
    margin-top: 48px;
    font-size: 20px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #21262C;
    transition: all 0.5s;
}
li:hover .data{
    margin-left: 7px;
    margin-top: 5px;
}
 li:hover .introduce{
    display: flex;
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #21262C;
    margin-left: 78px;
    margin-top: 5px;
    transition: all 0.5s;
}
li:hover .writer-name{
     margin-top: 5px;
     margin-left: 78px;
     transition: all 0.5s;
}
li:hover .hovered-fonter{
    margin-top: 165px;
    transition: all 0.5s;
}
li:hover span{
    font-size: 18px;
    font-family: Impact;
    font-weight: 400;
    color: #659274;
    transition: all 0.5s;
}
.Like-Album{
    /* padding-left: 57px; */
    margin-top: 47px;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 59px;
}
.album{
    height: 28px;
    width: 28px;
}
.like-album-title>p{
    font-size: 20px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #21262C;
    margin-left: 9px;
}
.like-album-title{
    justify-content: center;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
}
.line{
    width: 1198px;
    height: 6px;
    border: 2px solid #659274;
    margin-top: 6px;
}
</style>