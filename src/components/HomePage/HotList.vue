<template>
    <div class="HotList">
        <HomeTitle :obj="tileObj"></HomeTitle>
        <ul class="d-flex" >
            <HotListli :obj2="photolist" :obj3="hotsong"></HotListli>
            <HotListli :obj2="photolist" :obj3="newsong"></HotListli>
        </ul>
    </div>
</template>
<style scoped>
.HotList{
    padding-left: 59px;
    padding-right: 59px;
}
ul{
    width: 1197px;
    height: 384px;
    background: #21262C;
    margin-top: 16px;
    padding-bottom: 35px;
}
</style>
<script>
import img3 from '../../img/矢量图/上新.png'
import img2 from '../../img/矢量图/热门.png'
import axios from 'axios'
import HomeTitle from '../HomePage/HomeTitle'
import img from '../../img/矢量图/榜单.png'
import url1 from '../../img/图片/beach-dawn-dusk-ocean-preview.png'
import url2 from '../../img/图片/landscape-autumn-fog-village-thumb.png'
import HotListli from '../HomePage/HotListli'
export default {
    name:'HotSong',
    components:{
        HomeTitle,
        HotListli
    },
    data(){
        return{
            tileObj:{
                title:'热门榜单',
                titleimg:img,
                
            },
            photolist:[],
            hotsong:{
                img:img2,
                url:url1,
                message:'热歌榜'
            },
            newsong:{
                img:img3,
                url:url2,
                message:' 新歌榜',
                width:'50px',
                height:'47px'
            }
        }
    },
    methods:{
    },
    created(){
            axios.get('/new_songs')
            .then(res =>{
                // console.log(res.data);
                // this.photolist=res.data
                this.photolist=res.data.slice(0,6);
                console.log(this.photolist);
            })
    },
 
}
</script>