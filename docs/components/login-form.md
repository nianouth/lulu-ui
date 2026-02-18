# LoginForm 登录表单

常用的登录表单组件，包含用户名和密码输入框以及提交按钮，支持自定义标签文本和占位符。

## 基础用法

基础的登录表单，监听 `submit` 事件获取用户输入的数据。

<div class="demo-block">
<LuLoginForm
  title="用户登录"
  @submit="handleSubmit"
/>
</div>

<script setup>
import { ref } from 'vue'

const handleSubmit = ({ username, password, done }) => {
  console.log('用户名:', username)
  console.log('密码:', password)
  // 模拟异步请求，2 秒后完成
  setTimeout(() => {
    done()
    alert(`登录信息：用户名=${username}，密码=${password}`)
  }, 2000)
}
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 表单标题 | `string` | — | `'登录'` |
| usernameLabel | 用户名标签文本 | `string` | — | `'用户名'` |
| passwordLabel | 密码标签文本 | `string` | — | `'密码'` |
| usernamePlaceholder | 用户名输入框占位文本 | `string` | — | `'请输入用户名'` |
| passwordPlaceholder | 密码输入框占位文本 | `string` | — | `'请输入密码'` |
| submitText | 提交按钮文本 | `string` | — | `'登录'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| submit | 点击提交按钮时触发 | `({ username: string, password: string, done: () => void })` |

#### submit 事件参数说明

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| username | 用户输入的用户名 | `string` |
| password | 用户输入的密码 | `string` |
| done | 完成回调，调用后恢复按钮状态 | `() => void` |
