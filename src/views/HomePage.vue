<template>
    <div class="homepage">
        <Header></Header>
        <Slideshow></Slideshow>
        <div class="homepage-container">
        <HotSong></HotSong>
        <NewAlbum></NewAlbum>
        <HotList></HotList>
        <albumFooter/>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import Header from '../components/Header'
import Slideshow from '../components/HomePage/Slideshow'
import HotSong from '../components/HomePage/HotSong'
import NewAlbum from '../components/HomePage/NewAlbum'
import HotList from '../components/HomePage/HotList'
import albumFooter from '../components/albumFooter'
export default {
    components: {
    Slideshow,
    HotSong,
    NewAlbum,
    HotList,
    Header,
    albumFooter
  }
}
</script>