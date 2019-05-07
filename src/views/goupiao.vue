<template>
    <div class="detail">
        <div class="detail-ban">
            <img :src="detailData.bannerImg">
            <router-link to="/"><div class="btn-back"><span class="iconfont icon-left"></span></div></router-link>
            <div class="btn-gel">
                <span class="iconfont icon-image-fill"></span>2
            </div>
            <p>{{detailData.sightName}}</p>
        </div>
        <div>
            <div class="detail-fist" v-for="item in detailData.categoryList">
                <p><span class="iconfont icon-youhuijuan"></span>{{item.title}}</p>
                <div class="detail-sod" v-for="ison in item.children">
                    <p><span class="iconfont icon-youhuijuan"></span>{{ison.title}}</p>
                    <div class="detail-last" v-for="isonChid in ison.children">
                        <p><span class="iconfont icon-youhuijuan"></span>{{isonChid.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import axios from 'axios'
    export default {
        name: "detail",
        computed:{
       		detailData(){
            	return this.$store.state.detailData
            }
       }
    }
</script>

<style scoped lang="less">
    .detail {

        .detail-ban {
            position: relative;
            & > p {
                position: absolute;
                bottom: .3rem;
                color: #fff;
                font-size: .35rem;
            }

            img {
                width: 100%;
                display: block;
            }

            .btn-back {
                position: absolute;
                width: .82rem;
                height: .82rem;
                top: .2rem;
                left: .2rem;
                border-radius: 50%;
                color: #fff;
                text-align: center;
                background: rgba(0, 0, 0, .4);

                span {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    font-size: .5rem;
                    transform: translate(-50%, -50%);
                }
            }

            .btn-gel {
                padding: .05rem .5rem;
                position: absolute;
                right: 0;
                color: #fff;
                bottom: .2rem;
                font-size: .3rem;
                border-radius: .2rem;
                background: rgba(0, 0, 0, .5);
            }
        }

        li {
            padding: .25rem 0;
            font-size: .3rem;
            border-bottom: 1px #ccc solid;
        }

        .detail-fist {
            font-size: .25rem;
            p {
                padding-left: .06rem;
                border-bottom: 1px #f2f2f2 solid;
                span{
                    display: inline-block;
                    background: #00bcd4;
                    border-radius: 50%;
                    padding: .05rem;
                    color: #fff;
                    font-size: .25rem;
                    margin: .2rem;
                    transform: rotate(30deg);
                }
            }
            .detail-sod {
                & > p {
                    padding-left: .26rem;
                }
                .detail-last {
                    & > p {
                        padding-left: .46rem;
                    }
                }
            }


        }
    }
</style>