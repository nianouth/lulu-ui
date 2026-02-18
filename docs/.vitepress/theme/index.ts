import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import LuluUI from '@lulu-ui/components'
import DemoBlock from './DemoBlock.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(LuluUI)
    app.component('DemoBlock', DemoBlock)
  },
} satisfies Theme
