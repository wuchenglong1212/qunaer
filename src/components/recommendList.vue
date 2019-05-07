<template>
    <div class="recommendList">
        <div class="recList-title">热销推荐</div>
        <ul>
            <li v-for="item in myjson.recommendList" :key="item.id">
                <img :src=item.imgUrl>
                <div class="con-box">
                    <h1>{{item.title}}</h1>
                    <h2>{{item.desc}}</h2>
                        <div class="btn">查看详情</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "recommendList",
        props: ['myjson']
    }
</script>

<style lang="less" scoped>
    .recommendList {
        margin-top: .2rem;
        .recList-title {
            padding: .27rem .2rem;
            font-size: .3rem;
            background: #eee;
        }
        ul {
            li {
                display: flex;
                padding: .1rem;
                border-bottom: .01rem solid #eee;
                img {
                    width: 2rem;
                    height: 2rem;
                }
                .con-box {
                    margin-left: .2rem;
                    h1 {
                        font-size: .32rem;
                        padding-top: .1rem;
                    }
                    h2 {
                        font-size: .25rem;
                        padding: .24rem 0;
                        color: #ccc;
                    }
                    .btn {
                        display: inline-block;
                        font-size: .32rem;
                        padding: .1rem .3rem;
                        background: #ff9300;
                        color: #fff;
                        float: left;
                        border-radius: .05rem;
                    }
                }
            }
        }
    }
</style>

