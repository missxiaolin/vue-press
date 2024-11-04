import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/",
  lang: 'en-US',

  title: '小林知识库',
  description: '记是一个综合性的前端知识库，汇集了关于HTML、CSS、JavaScript以及前端开发中的众多技术和概念。无论您是初学者还是经验丰富的开发者，本项目提供了丰富的教程、文档和实用工具，帮助您深入理解前端开发并加强技能。探索最新的前端趋势、解决常见的技术问题，以及发现开源项目和社区资源都可以在项目中找到。让这个综合性的知识库成为您的前端学习和参考之地，一站式满足您的前端开发需求。',

  theme: defaultTheme({
    logo: '/logo.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
