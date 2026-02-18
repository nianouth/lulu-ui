# Tabs 标签页

选项卡切换组件，用于在不同的内容区域之间进行切换。

## 基础用法

通过 `v-model` 绑定当前活动的标签页名称，`tabs` 传入标签页配置。使用默认插槽来放置对应的内容。

<div class="demo-block">
<LuTabs v-model="activeTab" :tabs="tabList">
  <div v-if="activeTab === 'user'">用户管理的内容区域</div>
  <div v-if="activeTab === 'role'">角色管理的内容区域</div>
  <div v-if="activeTab === 'permission'">权限设置的内容区域</div>
</LuTabs>
</div>

::: details 查看代码
```vue
<template>
  <LuTabs v-model="activeTab" :tabs="tabList">
    <div v-if="activeTab === 'user'">用户管理的内容区域</div>
    <div v-if="activeTab === 'role'">角色管理的内容区域</div>
    <div v-if="activeTab === 'permission'">权限设置的内容区域</div>
  </LuTabs>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('user')
const tabList = ref([
  { name: 'user', label: '用户管理' },
  { name: 'role', label: '角色管理' },
  { name: 'permission', label: '权限设置' },
])
</script>
```
:::

<script setup>
import { ref } from 'vue'

const activeTab = ref('user')
const tabList = ref([
  { name: 'user', label: '用户管理' },
  { name: 'role', label: '角色管理' },
  { name: 'permission', label: '权限设置' },
])
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 当前激活的标签页名称 | `string` | — | `''` |
| tabs | 标签页配置 | `Array<{ name: string, label: string }>` | — | `[]` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 当前激活标签页变化时触发 | `(name: string)` |
