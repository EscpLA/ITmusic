<template>
    <div class="myFollow">
        <div class="container">
            <myFollowComponent class=""/>
            <myFollowComponent class=""/>
            <myFollowComponent class=""/>
            <myFollowComponent class=""/>
            <myFollowComponent class=""/>
            <myFollowComponent class=""/>
        </div>

    </div>
</template>

<script>
import myFollowComponent from './myFollow/myFollowComponent'
export default {
    name: 'myFollow',
    components: {
        myFollowComponent
    }
}
</script>
<style >
.myFollow .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1195px;
    margin: 0 auto;
    margin-top: 17px;
} 
</style>