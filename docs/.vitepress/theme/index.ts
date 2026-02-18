import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import LuluUI from '@lulu-ui/components'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(LuluUI)
  },
} satisfies Theme
