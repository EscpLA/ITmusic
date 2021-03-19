<template>
  <div class="comments clearfix">
    
    <div class="title-words">
      <p class="fs-24 fw-b style-black fs lh-50">歌曲评论</p>
      <div class="green-line"></div>
    </div>
    <div class="comment-area">
      <commentsComponent />
    <commentsComponent />
    <commentsComponent />
    <commentsComponent />
    </div>
    <div class="send-review">
      <div class="titleWords">
        <p class="fs-18 fw-b style-black fs">评论</p>
        <div class="green-line"></div>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="fs-14 style-black fw-l"
        placeholder="请说出你的见解。"
      ></textarea>
      <div class="send-btn fr">
        <button><p class="fs-14 style-white fw-b">发送</p></button>
      </div>
    </div>
  </div>
</template>

<script>
import commentsComponent from "./commentsComponents/commentsComponent";
// import titleWords from "./titleWords";
export default {
  name: "comments",
  components: {
    commentsComponent,
    // titleWords,
  },
};
</script>

<style scoped>
.comments {
  padding-top: 20px;
}
.comments commentsComponent:first-of-type{
  margin-top: 50px;
}
.title-words {
  position: relative;
  z-index: 1;
  margin-top: -15px;
}
.comments .title-words .green-line {
  position: absolute;
  z-index: -1;
  left: 110px;
  bottom: 0px;
}
.comments .comment-area {
  padding: 20px 0px 40px;
}
.comments .send-review {
  width: 1197px;
  margin: 0 auto;
}
.comments .titleWords {
  position: relative;
  z-index: 2;
  margin-left: 10px;
  line-height: 50px;
}
.comments .send-review .titleWords .green-line {
  position: absolute;
  left: 10px;
  z-index: -1;
  left: 0px;
  bottom: 7px;
  width: 39px;
  height: 5px;
  background: #659274;
  border-radius: 5px;
}
.send-review textarea {
  width: 1196px;
  height: 78px;
  padding-left: 10px;
  padding-top: 8px;
  background: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.71);
  border-radius: 10px;
  resize: none;
  outline: none;
}
.send-review .send-btn button {
  width: 71px;
  height: 35px;
  margin-top: 20px;
  background: #659274;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.51);
  border-radius: 18px;
}
</style>
