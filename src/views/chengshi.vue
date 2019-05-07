<template>
	
		
	
    <div class="city-box"  v-on:click="hidePanel">
    	
        <ul class="side-right" >
            <li v-for="(item,key) in cityData.cities" :key="item.id" @click="toCity(key)">{{key}}</li>
        </ul>
        <div id="city-head">
            <div class="city-head-title">
                <router-link to="/index"><span class="back iconfont icon-left"></span></router-link>
                城市选择
            </div>
            <div class="inp-box">
                <input class="text" type="text" placeholder="输入城市或拼音" v-model="keyword">
                <div class="search-box" ref="searched" v-show="keyword">
                    <div>
                        <div id="searchconbox">
                            <p v-for="item in listItem" @click="toRout(item.name)"> {{item.name}}</p>
                            <p v-show="hasNoData" class="sear-null">没有搜索到匹配的数据</p></div>

                    </div>
                </div>
            </div>

        </div>
        <div id="mask" v-if="keyword"></div>
        <div class="wrapper" ref="wrapper" >
            <div class="city-con-box">
                <!--                <div  ></div>-->
                <div class="city-con">
                    <div class="city-title">
                        	当前城市
                    </div>
                    <div class="city-main">
                        <ul>
                            <li>{{clickCity}}</li>
                        </ul>
                    </div>

                    <div class="city-title">
                                                                        热门城市
                    </div>
                    <div class="city-main">
                        <ul>
                            <li v-for="item in cityData.hotCities" :key="item.id" @click="toRout(item.name)">
                                {{item.name}}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="city-con" v-for="(item,key) in cityData.cities" :key="item.id">
                    <div class="city-title" :ref="key">
                        {{key}}
                    </div>
                    <div class="city-main">
                        <ul>
                            <li v-for="x in item" :key="x.id" @click="toRout(x.name)">{{x.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script>
    import BScroll from 'better-scroll'
    import axios from 'axios'

    export default {
        name: "city",
        data() {
            return {
                clickCity: '常熟',
                keyword: '',
                listItem: [],
                timer: null
            }
        },
        methods: {
            toRout(x) {
                this.clickCity = x
                this.$router.push({
                    path: '/index',
                    query: {
                        id: this.clickCity
                    }
                })
            },
            toCity(x) {
                //点击侧边栏的字母跳转到对应div
                this.scroll.scrollToElement(this.$refs[x][0], 1000)
                // console.log(this.$refs[x])
            },
            hidePanel: function (event) {
                var sp = document.getElementById("searchconbox");
                var text=document.getElementsByClassName('text')[0]
                if (sp) {
                    if (!sp.contains(event.target)&&!text.contains(event.target)) {            //这句是说如果我们点击到了id为city-head以外的区域
                        this.keyword = '';
                        console.log(1)
                    }

                }

            }
        },
        
        computed: {
            hasNoData() {
                return !this.listItem.length //没有搜索的条件是否显示
            },
            cityData(){
            	return this.$store.state.cityData
            }
        },
        watch: {
            keyword() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword) {  //清空
                    this.listItem = ""
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cityData.cities) {
                        // console.log((this.cityData[i]));
                        this.cityData.cities[i].forEach((value) => {   //匹配搜索的条件
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.listItem = result
                    console.log(result)
                }, 100)
            }
        },

        mounted() {
            //挂载后使用bsroll插件
            this.scroll = new BScroll(this.$refs.searched, {mouseWheel: true, click: true, tap: true})
            this.scroll = new BScroll(this.$refs.wrapper, {mouseWheel: true, click: true, tap: true})//第二个传递的参数是解决bscroll插件在移动端不能点击

            // console.log(this.$refs)
            //接收参数
            this.clickCity = this.$route.query.id
            // console.log((this.$route.query.id));
        },
//      created() {
//      	this.$store.dispatch('getsuju')
//      	axios.get('http://www.shouzi.ltd/quner/city.php')
//              .then(res => {
//                      this.cityData = res.data.data
//                      console.log(this.cityData)
//                  }
//              )
//              .catch(function (error) {
//                  console.log(error);
//              })
//
//      }
    }
</script>

<style lang="less" scoped>
    #mask {
        position: fixed;
        top: 1.58rem;
        left: 0;
        width: 100% !important;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        z-index: 1;
        margin: 0 !important;
    }

    .side-right {
        position: fixed;
        text-align: center;
        right: 0;
        z-index: 10;
        top: 2.58rem;

        li {
            width: .6rem;
            margin-top: .1rem;
            font-size: .35rem;
            color: #00bcd4;
            font-weight: 100;
        }
    }

    .city-box {
        position: fixed;
        width: 100%;
        height: 100%;

        #city-head {
            background: #00bcd4;
            text-align: center;
            padding: 0 .1rem;
            height: 1.58rem;

            .city-head-title {
                height: .86rem;
                line-height: .86rem;
                font-size: .4rem;
                color: #fff;
                box-sizing: border-box;
            }

            span {
                position: absolute;
                left: .2rem;
                font-size: .5rem;
                color: #fff;
                line-height: .86rem;
            }


            .inp-box {
                input {
                    display: block;
                    width: 100%;
                    height: .62rem;
                    border-radius: .1rem;
                    outline: none;
                }

                input.text {
                    text-align: center;
                    font-size: .3rem;
                }

                .search-box {
                    position: absolute;
                    width: 100%;
                    z-index: 12;
                    left: 0;
                    top: 1.58rem;
                    padding: 0 .1rem;
                    box-sizing: border-box;
                    height: 100%;
                    overflow: hidden;
                    &>div{
                    #searchconbox {
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        background: #fff;

                        p{
                            width: 25%;
                            margin: .2rem 0;
                            padding: .1rem;
                            font-size: .32rem;
                            color: #333;
                            text-align: center;
                            border: 1px #ccc solid;
                            border-radius: .05rem;
                        }

                        .sear-null {
                            width: 100%;
                            border: none;
                        }
                        }


                    }
                }


            }

        }

        .wrapper {
            position: absolute;
            width: 100%;
            top: 1.58rem;
            bottom: 0;
            overflow: hidden;

            .city-con-box {
                .city-con {
                    .city-title {
                        padding: .15rem .2rem;
                        background: #eee;
                        font-size: .3rem;
                    }

                    .city-main {
                        padding: .20rem 0;

                        & > ul {
                            display: flex;
                            justify-content: flex-start;
                            flex-wrap: wrap;

                            & > li {
                                width: 24%;
                                margin: 0 0 .2rem .2rem;
                                padding: .1rem;
                                font-size: .32rem;
                                color: #333;
                                text-align: center;
                                border: 1px #ccc solid;
                                border-radius: .05rem;
                            }
                        }
                    }
                }
            }
        }


    }
</style>