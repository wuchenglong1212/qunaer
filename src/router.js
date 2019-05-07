import Vue from 'vue'
import Router from 'vue-router'
import city from '@/views/chengshi.vue'
import index from '@/views/index.vue'
import detail from '@/views/goupiao.vue'

Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:"/index",
  	component:index
  },
  {
  	path:"/city",
  	component:city
  },
  {
  	path:"/detail",
  	component:detail
  },
	{
		path:"*",
		redirect:"/index"
	}
  ]
})
