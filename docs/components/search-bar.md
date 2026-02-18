# SearchBar 搜索栏

搜索输入组件，支持双向绑定、搜索触发和清除功能。

## 基础用法

通过 `v-model` 实现搜索关键字的双向绑定，监听 `search` 事件获取搜索触发，监听 `clear` 事件响应清除操作。

<div class="demo-block">
<LuSearchBar
  v-model="keyword"
  placeholder="请输入搜索关键词"
  @search="handleSearch"
  @clear="handleClear"
/>
<p style="margin-top: 12px; color: #666;">当前输入：{{ keyword }}</p>
</div>

::: details 查看代码
```vue
<template>
  <LuSearchBar
    v-model="keyword"
    placeholder="请输入搜索关键词"
    @search="handleSearch"
    @clear="handleClear"
  />
  <p style="margin-top: 12px; color: #666;">当前输入：{{ keyword }}</p>
</template>

<script setup>
import { ref } from 'vue'

const keyword = ref('')

const handleSearch = (value) => {
  alert('搜索关键词：' + value)
}

const handleClear = () => {
  console.log('搜索内容已清除')
}
</script>
```
:::

<script setup>
import { ref } from 'vue'

const keyword = ref('')

const handleSearch = (value) => {
  alert('搜索关键词：' + value)
}

const handleClear = () => {
  console.log('搜索内容已清除')
}
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 搜索输入绑定值 | `string` | — | `''` |
| placeholder | 输入框占位文本 | `string` | — | `'请搜索'` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 输入值变化时触发 | `(value: string)` |
| search | 点击搜索按钮或按下回车时触发 | `(value: string)` |
| clear | 点击清除按钮时触发 | — |
