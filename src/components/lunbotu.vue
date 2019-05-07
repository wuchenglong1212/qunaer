<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="item in zhi" class='box'><img :src='item.imgUrl' /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!--<swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>-->
    <!-- Optional controls -->
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:["zhi"],
    data() {
      return {
      	
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
           pagination: {
            el: '.swiper-pagination'
          }
        },
        chengJie:""
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
//    console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    }
  }
</script>

<style lang="less"> 
.box{
	img{
		width: 100%;
		margin: 0 auto;
		
	}
}
</style>
<style>
    .swiper-pagination-bullet-active{background:#fff !important;}
</style>