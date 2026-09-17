import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';

const base = process.env.BASE_PATH && process.env.BASE_PATH !== '/'
  ? process.env.BASE_PATH
  : '/';

// 每个文章菜单在进入当前页时自动展开文章标题大纲。
const pageLink = (text, link) => ({ text, link });

export default defineUserConfig({
  base,
  lang: 'zh-CN',
  title: '梅花易数学习笔记',
  description: '以象数为径，记录梅花易数的学习、起卦与体悟',
  head: [
    ['meta', { name: 'theme-color', content: '#6b3f26' }]
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/logo.svg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '入门导读', link: '/guide/' },
      { text: '基础体系', link: '/basics/' },
      { text: '起卦方法', link: '/divination/' },
      { text: '案例与复盘', link: '/cases/' },
      { text: '学习工具', link: '/tools/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门导读',
          children: [
            pageLink('导读', '/guide/'),
            pageLink('梅花易数笔记写法', '/guide/writing.html'),
            pageLink('部署到 GitHub Pages', '/guide/github-pages.html')
          ]
        }
      ],
      '/basics/': [
        {
          text: '基础体系',
          children: [
            pageLink('基础体系', '/basics/'),
            pageLink('记住卦名和卦序', '/basics/chapter-01-hexagram-names.html'),
            pageLink('八卦基础', '/basics/bagua.html'),
            pageLink('六十四卦基础框架', '/basics/sixty-four-hexagrams.html')
          ]
        }
      ],
      '/divination/': [
        {
          text: '起卦方法',
          children: [
            pageLink('起卦方法', '/divination/')
          ]
        }
      ],
      '/cases/': [
        {
          text: '案例与复盘',
          children: [
            pageLink('案例与复盘', '/cases/')
          ]
        }
      ],
      '/tools/': [
        {
          text: '学习工具',
          children: [
            pageLink('工具目录', '/tools/'),
            pageLink('完整版刷题工具', '/tools/quiz.html'),
            pageLink('经典版刷题工具', '/tools/classic-quiz.html')
          ]
        }
      ]
    },
    // 当前文章在左侧展开二、三级标题，作为阅读大纲。
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: '最后更新'
  })
});
