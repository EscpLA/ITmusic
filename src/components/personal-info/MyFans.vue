<template>
    <div class="MyFans">
        <div class="container">
            <HomeTitle :obj="fanObj"/>
            <div class="fanContainer">
                <div class="fan">
                <div class="avater">
                    <img src="../../../images/upload_img/图片/microphone-boy-studio-screaming-preview.jpg" alt="">
                </div>
                <div class="name">
                    <div class="fs-14 fw-b style-white">
                        粉丝名
                    </div>
                </div>
                <div class="info">
                    <div class="fans ">
                        <p class="fs-14 fw-l style-white fl ml-5">粉丝</p>
                        <p class="fs-14 style-white style-impact ml-5">12</p>
                    </div>
                    <div class="follow">
                        <p class="fs-14 fw-l style-white fl">关注</p>
                        <p class="fs-14 style-white style-impact ml-5 mr-12">33</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import HomeTitle from '../HomePage/HomeTitle'
import fanImg from '../../../images/img/粉丝.png'
    export default {
        name: 'MyFans',
        components: {
            HomeTitle,
        },
        data() {
            return {
                fanObj: {
                    title: '我的粉丝',
                    titleimg: fanImg,
                    color: 'filter: invert(100%)'
                }
            }
        },
    }
</script>
<style scoped>
.MyFans .container {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    width: 1195px;
    margin: 0 auto;
    margin-top: 17px;
}
.MyFans .container .fanContainer {
    padding-top: 20px;
}
.MyFans .container .fan {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 149px;
    height: 157px;
    background: #21262C;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.82);
    border-radius: 5px;
}
.MyFans .container .fan > div {
    width: 100%;
}
.MyFans .container .fan .avater {
    display: flex;
    justify-content: center;
    padding-top: 12px;
}
.MyFans .container .fan .avater img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
}
.MyFans .container .fan .name { 
    text-align: center;
}
.MyFans .container .fan .info {
    display: flex;
    justify-content: center;
}
.MyFans .container .fan .info > div {
    display: flex;
    justify-content: center;
    width: 100%;;
}
.ml-5 {
    margin-left: 5px;
}
.mr-12{
    margin-right: 12px;
}
</style>