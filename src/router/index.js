import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Pages/BlogArticle'
import About from '@/views/About'
import Application from '@/views/Application'
import Contact from '@/views/Contact'
import SignIn from '@/components/User/SignIn'
import BlogPost from '@/components/Pages/BlogPost'
import ViewPosts from '@/components/Pages/AllPosts'
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
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/blogPost/new',
      name: 'CreateBlogPost',
      component: CreateBlogPost
    },
    {
      path: '//:id',
      name: 'BlogPost',
      component: BlogPost
    },
    {
      path: '/viewPosts',
      name: 'ViewPosts',
      component: ViewPosts
    }
  ],
  mode: 'history'
})
