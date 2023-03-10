const nav = require('./config/nav.js');

module.exports = {
  title: "Hitaki's blog",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
  base: '/hitaki/', // '/<github仓库名>/'， 默认'/' 
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown' }],
    ['meta', { name: 'theme-color', content: '#b28fce' }], // 移动浏览器主题颜色
  ],
  markdown: {
    lineNumbers: true, // 代码行号
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../vdoing'), // 使用本地主题
  themeConfig: { // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/EB-logo.png', // 导航栏logo
    repo: 'recreyed/hitaki', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    docsBranch: 'main',
    editLinks: true, // 编辑链接
    editLinkText: '编辑',

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'Hitaki', // 必需
      href: 'https://github.com/recreyed' // 可选的
    },
    blogger: { // 博主信息，显示在首页侧边栏
      avatar: 'https://img.recreyed.tk/cfc9c2ef-d65f-4005-aa2a-2457adb42876.jpeg',
      name: 'Hitaki',
      slogan: '疾风骤雨'
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1760603940@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/recreyed'
        },
        {
          iconClass: 'icon-QQ',
          title: 'QQ',
          link: 'http://wpa.qq.com/msgrd?v=3&uin=1760603940&site=qq&menu=yes'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2020, // 博客创建年份
      copyrightInfo: 'Hitaki | MIT License', // 博客版权信息，支持a标签
    },

    extendFrontmatter: { //自动生成front matter
      author: {
        name: 'hitaki',
        link: 'https://github.com/recreyed'
      },
    },

    // 以下配置是Vdoing主题改动的和新增的配置
    category: true, // 是否打开分类功能，默认true。
    tag: true, // 是否打开标签功能，默认true。 
    archive: true, // 是否打开归档功能，默认true。 
    categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    bodyBgImg: [
      'https://img.recreyed.tk/e0d615a6-6507-4334-9758-718130984d26.webp',
    ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    bodyBgImgOpacity: 0.8,
    bodyBgImgInterval: 0, //body有多张背景大图时的切换间隔

    titleBadge: true, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [],// 文章标题前图标的地址，默认主题内置图标

    // 左侧边栏。温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    sidebarOpen: true, // 初始状态是否打开侧边栏，默认true

    rightMenuBar: true, //是否显示右侧文章大纲栏。设置为false或屏宽小于1300px时，文章大纲将与左侧侧边栏混合在一起
    
    updateBar: { // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },

  },
  plugins: [ // 插件
    ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
      thirdparty: [ // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Google中搜索',
          frontUrl: 'https://www.google.com/search?q='
        }
      ]
    }],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '1'
      }
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: 'c0b3bcf24b4632489bb9',
          clientSecret: '80c3e9e0a8023b25388ffe5b95117f690cf6623a',
          repo: 'hitaki', // GitHub 仓库
          owner: 'recreyed', // GitHub仓库所有者
          admin: ['recreyed'], // 对仓库有写权限的人
          distractionFreeMode: false,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
        }
      }
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
        }
      }
    ],
  ]
}
