import type { App } from 'vue'

// 基础通用组件
export { Button } from './button'
export { Input } from './input'
export { Select } from './select'
export { Modal } from './modal'
export { Tag } from './tag'
export { Switch } from './switch'
export { Table } from './table'
export { Tabs } from './tabs'
export { Alert } from './alert'
export { Badge } from './badge'

// 业务组件
export { LoginForm } from './login-form'
export { UserCard } from './user-card'
export { SearchBar } from './search-bar'

// 图表组件
export { LineChart, BarChart, PieChart } from './chart'

// 全量引入
import { Button } from './button'
import { Input } from './input'
import { Select } from './select'
import { Modal } from './modal'
import { Tag } from './tag'
import { Switch } from './switch'
import { Table } from './table'
import { Tabs } from './tabs'
import { Alert } from './alert'
import { Badge } from './badge'
import { LoginForm } from './login-form'
import { UserCard } from './user-card'
import { SearchBar } from './search-bar'
import { LineChart, BarChart, PieChart } from './chart'

const components = [
  Button, Input, Select, Modal, Tag, Switch, Table, Tabs,
  Alert, Badge, LoginForm, UserCard, SearchBar,
  LineChart, BarChart, PieChart,
]

const install = (app: App) => {
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name, component)
    }
  })
}

export default { install }
