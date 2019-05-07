<template>
  <div id="app">
    <router-view v-if="this.$store.state.myjson&&this.$store.state.cityData"/>
    <div class="loading" v-else><img src="@/assets/timg.gif"></div>
  </div>
</template>

<script>
	export default {
  components:{
  },
	created() {
			this.$store.dispatch('getsuju')
			
		}
}
</script>

<style lang="less">
	.loading{
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: #fff;
            z-index: 55;
            img{
                position: fixed;
                display: block;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
</style>
