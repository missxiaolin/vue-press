import "/Users/xiaolin/web/vue-press-blog/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/xiaolin/web/vue-press-blog/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/xiaolin/web/vue-press-blog/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/xiaolin/web/vue-press-blog/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/xiaolin/web/vue-press-blog/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/xiaolin/web/vue-press-blog/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
