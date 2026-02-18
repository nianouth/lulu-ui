import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Lulu UI',
  description: 'Vue 3 组件库 - 简洁优雅的 UI 组件集合',
  base: '/lulu-ui/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/lulu-ui/logo.svg' }],
  ],
  vite: {
    resolve: {
      alias: {
        '@lulu-ui/components': resolve(__dirname, '../../packages/components/src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    ssr: {
      noExternal: ['@lulu-ui/components'],
    },
    optimizeDeps: {
      exclude: ['echarts'],
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/nianouth/lulu-ui' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Tabs 标签页', link: '/components/tabs' },
            { text: 'Modal 对话框', link: '/components/modal' },
            { text: 'Tag 标签', link: '/components/tag' },
            { text: 'Alert 提示', link: '/components/alert' },
            { text: 'Badge 徽标', link: '/components/badge' },
          ],
        },
        {
          text: '业务组件',
          items: [
            { text: 'LoginForm 登录表单', link: '/components/login-form' },
            { text: 'UserCard 用户卡片', link: '/components/user-card' },
            { text: 'SearchBar 搜索栏', link: '/components/search-bar' },
          ],
        },
        {
          text: '图表组件',
          items: [
            { text: 'LineChart 折线图', link: '/components/line-chart' },
            { text: 'BarChart 柱状图', link: '/components/bar-chart' },
            { text: 'PieChart 饼图', link: '/components/pie-chart' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nianouth/lulu-ui' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Lulu UI',
    },
    search: {
      provider: 'local',
    },
  },
})
