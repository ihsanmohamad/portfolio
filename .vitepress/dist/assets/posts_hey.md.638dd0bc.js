import{o as n,c as e,a}from"./app.82f6e7a3.js";const s='{"title":"Heyyyy","description":"hello","frontmatter":{"title":"Heyyyy","date":"2021-02-05T00:00:00.000Z","author":"Ihsan Mohamad","gravatar":"eca93da2c67aadafe35d477aa8f454b8","twitter":"@youyuxi","head":[["meta",{"name":"description","content":"hello"}],["meta",{"name":"keywords","content":"super duper SEO"}]]},"headers":[{"level":2,"title":"Looking Back at 2020","slug":"looking-back-at-2020"},{"level":2,"title":"Looking Forward to 2021","slug":"looking-forward-to-2021"}],"relativePath":"posts/hey.md","lastUpdated":1612713204519}',t={},o=a('<p>Heyyy its me dio da<br> sadasdsadsadsa</p><hr><div class="language-python"><pre><code>\n    <span class="token keyword">from</span> tortoise<span class="token punctuation">.</span>models <span class="token keyword">import</span> Model\n    <span class="token keyword">from</span> tortoise <span class="token keyword">import</span> fields\n    \n    <span class="token keyword">class</span> <span class="token class-name">Tournament</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token builtin">id</span> <span class="token operator">=</span> fields<span class="token punctuation">.</span>IntField<span class="token punctuation">(</span>pk<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n        name <span class="token operator">=</span> fields<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    \n        <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> self<span class="token punctuation">.</span>name\n\n\n    <span class="token keyword">class</span> <span class="token class-name">Event</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token builtin">id</span> <span class="token operator">=</span> fields<span class="token punctuation">.</span>IntField<span class="token punctuation">(</span>pk<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n        name <span class="token operator">=</span> fields<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        tournament <span class="token operator">=</span> fields<span class="token punctuation">.</span>ForeignKeyField<span class="token punctuation">(</span><span class="token string">&#39;models.Tournament&#39;</span><span class="token punctuation">,</span> related_name<span class="token operator">=</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span>\n        participants <span class="token operator">=</span> fields<span class="token punctuation">.</span>ManyToManyField<span class="token punctuation">(</span><span class="token string">&#39;models.Team&#39;</span><span class="token punctuation">,</span> related_name<span class="token operator">=</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">,</span> through<span class="token operator">=</span><span class="token string">&#39;event_team&#39;</span><span class="token punctuation">)</span>\n    \n        <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> self<span class="token punctuation">.</span>name\n\n\n    <span class="token keyword">class</span> <span class="token class-name">Team</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token builtin">id</span> <span class="token operator">=</span> fields<span class="token punctuation">.</span>IntField<span class="token punctuation">(</span>pk<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n        name <span class="token operator">=</span> fields<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    \n        <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            <span class="token keyword">return</span> self<span class="token punctuation">.</span>name\n</code></pre></div><h2 id="looking-back-at-2020"><a class="header-anchor" href="#looking-back-at-2020" aria-hidden="true">#</a> Looking Back at 2020</h2><p>2020 has been a challenging year, to say the least. Nonetheless, the team has made the best of a difficult situation. Despite an already massive user base, Vue&#39;s <a href="https://npm-stat.com/charts.html?package=vue&amp;from=2020-01-01&amp;to=2020-12-31" target="_blank" rel="noopener noreferrer">NPM downloads</a> and <a href="https://chrome-stats.com/d/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noopener noreferrer">Devtools weekly active users</a> both grew close to 50% throughout 2020. As time of this writing, Vue is being downloaded ~8M times per month on NPM and the devtools extension has ~1.5M weekly active users.</p><p>Aside from routine maintenance, there are some incredible things that we accomplished as a team:</p><ul><li><a href="https://github.com/vuejs/vue-next/releases/tag/v3.0.0" target="_blank" rel="noopener noreferrer">Shipped Vue 3 core</a></li><li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Brand new docs site for Vue 3</a></li><li><a href="https://github.com/vuejs/vue-router-next/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">Vue Router 4</a></li><li><a href="https://next.vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex 4 (RC)</a></li><li><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg" target="_blank" rel="noopener noreferrer">Vue DevTools 6.0 with Vue 3 support (Beta)</a></li><li><a href="https://vue-test-utils.vuejs.org/v2/guide/introduction.html" target="_blank" rel="noopener noreferrer">Vue Test Utils 2 (Beta)</a></li></ul><p>In addition to iterating on the existing ecosystem, we also invested in exploring improvements on new frontiers:</p><ul><li>New Single File Component (SFC) feature proposals with the goal of leveraging the SFC compiler for more DX and performance wins: <ul><li><a href="https://github.com/vuejs/rfcs/pull/227" target="_blank" rel="noopener noreferrer"><code>&lt;script setup&gt;</code></a></li><li><a href="https://github.com/vuejs/rfcs/pull/231" target="_blank" rel="noopener noreferrer">CSS variables injection in <code>&lt;style&gt;</code></a></li></ul></li><li><a href="https://github.com/znck/vue-developer-experience" target="_blank" rel="noopener noreferrer">VueDX</a> for providing better IDE integrations and development workflow</li><li><a href="http://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>, a new build tool built on top of modern standards</li><li><a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VitePress</a>, a new static site generator built on Vue 3 and Vite</li></ul><blockquote><p>In addition to all of these exciting projects, it’s also been incredible to see the community continue to grow despite the challenges 2020 set forth in terms of being unable to facilitate in-person events. With initiatives such as remote conferences, meetups and other events, it’s been a joy to see the community interacting in new ways that might not have been possible otherwise.</p></blockquote><h2 id="looking-forward-to-2021"><a class="header-anchor" href="#looking-forward-to-2021" aria-hidden="true">#</a> Looking Forward to 2021</h2><p>While Vue 3 beings many fundamental improvements and opens up avenues for future iterations, we are still in a transition period - both in terms of the library ecosystem and best practices involving new APIs. For early 2021, our focus will be further stabilizing the Vue 3 ecosystem, and continuing to help the community through this transition period. Here is a non-exhaustive list of things we’re looking forward to:</p><ol><li>Stablize current RC/Beta sub projects</li><li>Finalize SFC proposals and further polish IDE support</li><li>Vue 3.1 (Q1, more details as we finalize the release plan)</li><li>Vue 2 → 3 Migration Tools (estimated end of Q1)</li><li>Vue CLI 5 w/ webpack 5 support (estimated Q1)</li><li>Vue 3 IE 11 Compatibility Build (estimated Q2)</li><li>Vue 2.7 (estimated Q2/3)</li><li>SSR support in Vite (TBD)</li><li>Vuex 5 (TBD)</li></ol><p>In addition, we are excited about other frameworks and libraries in the ecosystem making progress towards Vue 3 support. And of course, we can’t wait to see what new ideas and tools you all have as we embark on a new chapter in the Vue.js roadmap.</p>',14);t.render=function(a,s,t,p,r,l){return n(),e("div",null,[o])};export default t;export{s as __pageData};
