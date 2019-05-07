<template>
	<div id="">
		<div id="">
			<v-header></v-header>
			<v-lunbo :zhi=bjiMg></v-lunbo>
			<v-daohang :arr=dhimg></v-daohang>
			<recommend-list :myjson=myjson></recommend-list>
			<weekend-list :myjson=myjson></weekend-list>
		</div>
	</div>
</template>

<script>
	import vHeader from '@/components/searches.vue'
	import vLunbo from '@/components/lunbotu.vue'
	import axios from '../../node_modules/axios'
	import vDaohang from '@/components/daohang.vue'
	import recommendList from '@/components/recommendList.vue'
	import weekendList from '@/components/weekendList.vue'
	export default {
		axios,
		components: {
			vHeader,
			vLunbo,
			vDaohang,
			recommendList,
			weekendList,
		},
		
		computed:{
			bjiMg(){
				console.log(this)
				return this.$store.state.myjson.swiperList
			},
			dhimg(){
				return this.$store.state.myjson.iconList
			},
			myjson(){
				return this.$store.state.myjson
			}
		},
//		created() {
//			this.$store.dispatch('getsuju')
//			
//		}
	}
</script>

<style>

</style>