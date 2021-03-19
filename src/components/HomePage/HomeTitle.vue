<template>
    <div class="HomeTitle d-flex">
        <div class="title-png-container text-center">
            <img :src="obj.titleimg" alt="" :style="obj.color">
        </div>
        <div class="title-text-container">
            <p>{{obj.title}}</p>
            <div></div>
        </div>
    </div>
</template>
<style scoped>
.title-png-container{
    width: 50px;
    height: 50px;
    background: #21262C;
    border-radius: 25px;
}
img{
    width: 25px;
    height: 25px;
    margin-top: 11px;
}
.title-text-container{
    margin-left: 11px;
}
.title-text-container>p{
    width: 102px;
    height: 24px;
    font-size: 24px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #21262C;
    line-height: 45px;
    text-shadow: 1px .8px .8px #000;
}
.title-text-container>div{
    width: 103px;
    height: 11px;
    background: #659274;
    border-radius: 5px;
}
</style>
<script>

export default {
    name:'HomeTitle',
    data(){
        return{
            titleObj:{}
        }
    },
    props:{
        obj:Object,
    }
}

</script>