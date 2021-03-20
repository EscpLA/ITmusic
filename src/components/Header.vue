<template>
<div class="Header-container">
    <div class="header">
        <ul class="header-ul d-flex">
            <router-link to="/">
            <li class="sign d-flex">
                <img src="../img/图片/sign.png" alt="">
            </li>
            </router-link>
            <ul class="three d-flex">
                <li class=" text-container" :style="{color: first ? '#FFFFFF' : '',backgroundColor:first ? '#21262c' :''}" @click="firstLi">
                热门歌单
            </li>
            <li class=" text-container" :style="{color: second ? '#FFFFFF' : '',backgroundColor:second ? '#21262c' :''}" @click="secondLi">
                新专上架
            </li>
            <li class=" text-container" :style="{color: third ? '#FFFFFF' : '',backgroundColor:third ? '#21262c' :''}" @click="thirdLi">
                热门榜单
            </li>
            </ul>
            <li class="header-sercher d-flex">
                <input type="text" placeholder="开启您的音乐之旅。">
                    
            </li>
            <li class="person d-flex">
                    <div class="person-img d-flex">登<br>陆</div>
                    游客xasdhk
                </li>
                <router-link to="PersonInfo">
                <li class="person d-flex ">
                    <div class="person-img d-flex"><img src="../img/矢量图/我的.png" alt=""></div>
                    游客xasdhk
                </li>
                </router-link>
        </ul>
    </div>
    <div class="header-line"></div>
    </div>
</template>
<style scoped>
.header-line{
    background: #659274;
    border-radius: 5px;
    height: 10px;
    width: 100%;
}
.person-img>img{
    width: 25px;
height: 25px;
filter:invert(100%)
}
.person-img{
    width: 45px;
    height: 46px;
    background: #659274;
    border-radius: 23px;
    font-size: 14px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    margin-right: 10px;
}
.person{
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    color: #FFFFFF;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);
}
.Header-container{
    height: 110px;
}
.header{
    width: 100%;
    height: 100px;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.46);
    background-color: #21262c;
}
.header-ul{
    width: 1313px;
    margin: 0 auto;
    color:#ffff;
    align-items: center;
    height: 100%;
    justify-content: space-between;
}
ul>li{
    align-items: center;
    height: 100%;
    list-style: none;
    cursor: pointer;
}
.text-container{
    width: 116px;
    height: 100px;
    background: #659274;
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #21262C;
    text-align: center;
    line-height: 100px;
}
input{
    width: 388px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.55);
    border-radius: 25px;
    font-size: 16px;
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    color: #666666;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.51);
    line-height: 50px;
    padding-left: 16px;
    background-image: url(../img/图片/angle-right.png);
    background-repeat: no-repeat;
    background-position: 311px 1px;
    outline: none;
}

.img-contianer{
    width: 71px;
    height: 32px;
    background: #659274;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.52);
    border-radius: 16px;
    justify-content: center;
    align-items: center;
}
.img-contianer>img{
    width: 21px;
    height: 21px;
    filter:invert(100%)
}
</style>
<script>
export default {
    data(){
        return{
            isClick:false,
            isShow:true,
            first:true,
            second:true,
            third:true,
        }
    },
    methods:{
        on(){
            this.isClick=true,
            this.isShow=false
        },
        firstLi(){
            this.second=true,
            this.third=true
            this.first=!this.first
        },
        secondLi(){
            this.first=true,
            this.third=true
            this.second=!this.second
        },
        thirdLi(){
            this.second=true,
            this.first=true
            this.third=!this.third
        },
        leave(){
            this.isClick=false,
            this.isShow=true
        }
    }
}
</script>