import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		myjson:"",
		cityData:"",
		detailData:""
	},
	mutations:{
		fun(state,vlu){
			state.myjson=vlu
			console.log(1)
		},
		fu(state,vlu){
			state.cityData=vlu
			console.log(vlu)
		},
		f(state,vlu){
			state.detailData=vlu
			console.log(1)
		}
	},
	actions:{
		getsuju(store){
			this._vm.axios.get('http://www.shouzi.ltd/quner/page.php')
				.then((response) => {				
					this.commit('fun',response.data.data)
				})
				.catch((error) => {
					console.log(error);
				});
			this._vm.axios.get('http://www.shouzi.ltd/quner/city.php')
				.then((res) => {				
					this.commit('fu',res.data.data)
				})
				.catch((error) => {
					console.log(error);
				});
			this._vm.axios.get('http://www.shouzi.ltd/quner/detail.php')
				.then((res) => {				
					this.commit('f',res.data.data)
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
})
