<template>
    <div>
        <Header></Header>
        <div class="w">
        <personalIntro/>
        <myFollow/>
        </div>
    </div>
</template>

<script>
// import personalIntro from '../components/personal-info/personalIntro';
import personalIntro from '../components/personal-info/personalIntro';
import myFollow from '../components/personal-info/myFollow.vue';
import Header from '../components/Header'
export default {
    name: 'personalInfo',
    components: {
        personalIntro,
        myFollow,
        Header
    }
}
</script>

<style >


</style>