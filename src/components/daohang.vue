<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper" v-if=arr>
        <!-- slides -->
        <swiper-slide v-for="item in  num" :key="item.id">
            <div class="icon-box">
                <ul v-for="x in item" :key="x.id" class="icon" >
                    <li @click="todetail(x.desc)" :ref="x.desc"><img :src=x.imgUrl>
                        <p>{{x.desc}}</p>
                    </li>
                </ul>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>

    export default {
        name: 'iconList',
        props: ['arr'],
        data() {
            return {
                swiperOption: {
                }
            }
        },
        methods:{
            todetail(x){
                console.log(x)
                this.$router.push({
                    path:'/detail'
                })
            }
        },
        computed: {
            num() {
                let Json = this.arr;
                let shuju = [];
                for (let i = 0; i < Json.length; i +=8) {
                    shuju.push(Json.slice(i, i + 8))
                }
                return shuju;
            },
            swiper() {
                return this.$refs.mySwiper.swiper
            },
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            this.swiper.slideTo(0, false)
        }
    }
</script>

<style lang="less" scoped>
    .swiper {
        width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .icon-box {
        display: flex;
        flex-wrap: wrap;
        .icon {
            width: 25%;
            text-align: center;
            font-size: .30rem;
            li {
                img {
                    padding: .2rem 0;
                    display: block;
                    width: 1.23rem;
                    margin: 0 auto;
                }
            }
        }
    }
</style>