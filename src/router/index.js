import Vue from 'vue'
import Router from 'vue-router'
import Tree from '../components/tree/pages/index.vue'
import DownTree from '../components/treeselect/data.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Tree
  },
  {
    path: '/downtree',
    name: 'index',
    component: DownTree
  }
]
})


