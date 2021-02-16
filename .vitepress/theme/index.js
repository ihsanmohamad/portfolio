import './tailwind.css'
import './style.css'

// import {app , router, siteData} from 'vitepress'
import Layout from './Layout.vue'
import Blog from './Blog.vue'
import NotFound from './NotFound.vue'

export default {
  Layout,
  Blog,
  NotFound,
  enhanceApp({ app, router, siteData }) {
  }
}
