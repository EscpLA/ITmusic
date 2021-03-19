<template>
  <div>
    <albumIntro />
    <div class="w">
      <songsList />
      <comments />
    </div>
      <albumFooter />
  </div>
</template>

<script>
import albumIntro from "../components/album-info/album-intro.vue";
import songsList from "../components/album-info/songsList.vue";
import comments from "../components/album-info/comments.vue";
import albumFooter from "../components/album-info/albumFooter.vue";
export default {
  name: "albumInfo",
  components: {
    albumIntro,
    songsList,
    comments,
    albumFooter,
  },
};
</script>

<style></style>
