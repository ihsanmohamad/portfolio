import './tailwind.css'
import './style.css'

// import {app , router, siteData} from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
  }
}
