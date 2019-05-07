<template>
  <div class="search">
    <ul>
    	<li><span class="iconfont icon-left"></span></li>
    	<li><span class="iconfont icon-search"></span><input type="text" name="" id="" value="" placeholder="输入城市/景点/游玩主题"/></li>
    	<li @click="toData"><p>{{rouData}}</p><span class="iconfont icon-caret-down"></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shousuo',
  data(){
  	return {rouData:''}
  },
  props: {
    msg: String
  },
  methods:{
      toData(){
        this.$router.push({
          path:'/city',
          query:{
            id:this.rouData
          }
        })
      }
    },
    mounted() {
      this.rouData=this.$route.query.id
      //if判断值是否为传递的路由参数，可用于设置默认路由值
      if (!this.rouData) {
        this.rouData = '常熟';
      }
      console.log((this.$route.query.id));
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search{
	width: 100%;
	ul{
		display: flex;
		width:7.5rem;
		height: 0.86rem;
		margin: 0 auto;
		background-color: #00bcd4;
		li{
		  display: flex;
		  padding-top: 0.1rem;
		 	position:relative;
		  &:nth-child(1){
		  	span{font-size: 0.6rem;
		  	color: #fff;}
		  } 
		  &:nth-child(2){
		  	span{
		  	position: absolute;
		  	font-size: 0.6rem;
		  	color: #ccc;
		  	}
		  } 
		  &:nth-child(3){
		  	color: #fff;
		  	p{
		  		padding-top:0.1rem ;
		  	}
		  	span{
		  	
		  	 font-size: 0.6rem;
		  	}
		  } 
		  input{
		  	box-sizing: border-box;
		  	width: 5.42rem;
		  	height: 0.64rem;
		  	padding-left:0.7rem ;
		  	vertical-align: middle;
		  	border-radius: 5px;
		  }
		}
	}
}
</style>
