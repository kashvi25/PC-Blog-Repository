import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import AddPost from '@/components/AddPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: AddPost
    }
  ]
})
