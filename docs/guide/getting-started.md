# 快速开始

## 介绍

Lulu UI 是一个基于 Vue 3 的组件库，提供了丰富的 UI 组件，包括基础通用组件、业务定制组件和数据可视化组件。

## 安装

```bash
# npm
npm install @lulu-ui/components

# pnpm
pnpm add @lulu-ui/components
```

## 全量引入

```ts
import { createApp } from 'vue'
import LuluUI from '@lulu-ui/components'
import '@lulu-ui/components/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(LuluUI)
app.mount('#app')
```

## 按需引入

```vue
<script setup lang="ts">
import { Button, Input } from '@lulu-ui/components'
import '@lulu-ui/components/dist/style.css'
</script>

<template>
  <Button type="primary">按钮</Button>
  <Input placeholder="请输入" />
</template>
```

## 组件总览

### 基础组件

| 组件 | 说明 |
|------|------|
| Button | 按钮 |
| Input | 输入框 |
| Select | 选择器 |
| Switch | 开关 |
| Table | 表格 |
| Tabs | 标签页 |
| Modal | 对话框 |
| Tag | 标签 |
| Alert | 提示 |
| Badge | 徽标 |

### 业务组件

| 组件 | 说明 |
|------|------|
| LoginForm | 登录表单 |
| UserCard | 用户卡片 |
| SearchBar | 搜索栏 |

### 图表组件

| 组件 | 说明 |
|------|------|
| LineChart | 折线图 |
| BarChart | 柱状图 |
| PieChart | 饼图 |
