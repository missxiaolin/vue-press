import comp from "/Users/xiaolin/web/vue-press-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"小林知识库\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"小林知识库\",\"heroImage\":\"/logo.png\",\"actions\":null,\"footer\":null},\"headers\":[],\"git\":{\"updatedTime\":1730686020000,\"contributors\":[{\"name\":\"missxiaolin\",\"email\":\"462441355@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
