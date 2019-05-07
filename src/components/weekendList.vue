<template>
    <div class="weekendList">
        <div class="wekList-title">周末去哪儿</div>
        <ul>
            <li v-for="item in myjson.weekendList" :key="item.id">
                <img :src=item.imgUrl>
                <div class="con-box">
                    <h1>{{item.title}}</h1>
                    <h2>{{item.desc}}</h2>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        props:['myjson'],
        name: "weekendList"
    }
</script>

<style lang="less" scoped>
    .weekendList {
        padding-bottom: .3rem;
    .wekList-title {
        padding: .27rem .2rem;
        font-size: .3rem;
        background: #eee;
    }
    ul {
    li {
        padding: .1rem;
    img {
        width: 100%;
        height: auto;
    }
    .con-box {
        margin-left: .1rem;
    h1 {
        font-size: .32rem;
        padding-top: .1rem;
    }
    h2 {
        font-size: .25rem;
        padding: .24rem 0 0 0;
        color: #ccc;
    }
    }
    }
    }
    }
</style>
