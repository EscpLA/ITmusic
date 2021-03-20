<template>
  <div class="albumFooter bg-black">
    <div class="copyright">
      <div class="img-box fl" >
        <img src="../../images/img/版权.png" alt="" />
      </div>
      <p class="fs-14 style-white">爱特工作室出品</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "albumFooter",
};
</script>

<style>
.albumFooter {
  width: 100%;
  height: 100px;
  overflow: hidden;
}
.albumFooter .copyright {
width: 135px;
  margin: 68px auto 0px;
}
.albumFooter .copyright .img-box {
  width: 20px;
  height: 20px;
  overflow: hidden;
}
.albumFooter .copyright .img-box img {
  width: 20px;
  height: 20px;
  transform: translateY(-20px);
  filter: drop-shadow(#659274 0 20px);
}
.albumFooter .copyright p {
  font-family: HYGangYiTiJ;
}
</style>
