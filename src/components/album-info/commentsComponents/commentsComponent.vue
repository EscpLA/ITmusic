<template>
    <div class= "commentsComponet bg-grey">
        <div class="portrait fl"></div>
        <div class="main ">
            <div class="user ">
                <div class="nickname fl style-black fs-16 fw-b"><p>草木如织:</p></div>
                <div class="comment  style-black fs-16 fw-l"><p> 这是一条评论</p></div>
            </div>
            <div class="date fl"><p class="style-black fs-16 fw-l">2021.2.12</p></div>
        </div>
        <div class="reply fr clearfix">
            <div class="double-comment fr">
                <img src="../../../../images/img/评 论.png" alt="" class="fl">
                <p class="style-green fs-14 style-green style-impact lh-20 fl">12</p>
            </div>
            <div class="like fr">
                <img src="../../../../images/img/点赞.png" alt="" class="fl">
                <p class="style-green fs-14 style-green style-impact lh-20 fl">180</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'commentsComponet',
    props: {
        nickName: String,
        date: String,

    }
}
</script>

<style >
.commentsComponet {
    overflow: hidden;
    width: 1197px;
    height: 82px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
}
.portrait {
    width: 64px;
    height: 64px;
    margin-top: 9px;
    margin-left: 5px;
    margin-right: 12px;
    background-color: pink;
}
.main .user {
    /* height: 20px; */
    margin-top: 10px;
}
.main .user .nickname {
    margin-right: 16px;
}
.main .date {
    height: 20px;
    margin-top: -6px;
}
.reply .like {
    margin-right: 15px;
}
.reply .like img{
    width: 18px;
    height: 20px;
    margin-right: 5px;
}
.reply .double-comment {
    margin-right: 15px;
}
.reply .double-comment img{
    width: 18px;
    height: 18px;
    margin-right: 5px;
}
</style>