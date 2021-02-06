import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Pages/BlogArticle'
import About from '@/views/About'
import Application from '@/views/Application'
import Contact from '@/views/Contact'
// import SignIn from '@/components/User/SignIn'
import Post from '@/components/Pages/Post'
import Posts from '@/components/Pages/Posts'
import CreateBlogPost from '@/components/User/CreateBlogPost'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',

      component: About
    },
    {
      path: '/application',
      name: 'Application',
      component: Application
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    // {
    //   path: '/signIn',
    //   name: 'SignIn',
    //   component: SignIn
    //},
    {
      path: '/blogPost/new',
      name: 'CreateBlogPost',
      component: CreateBlogPost
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'Post',
      props: true,
      component: Post
    }
  ],
  mode: 'history'
})
