# UserCard 用户卡片

用于展示用户基本信息的卡片组件，支持头像、名称、描述以及自定义操作区域。

## 基础用法

通过 `name` 属性设置用户名称，`avatar` 设置头像地址，`description` 设置描述信息。

<div class="demo-block">
<LuUserCard
  name="露露"
  avatar="https://i.pravatar.cc/150?img=1"
  description="前端开发工程师，热爱开源。"
/>
</div>

::: details 查看代码
```vue
<template>
  <LuUserCard
    name="露露"
    avatar="https://i.pravatar.cc/150?img=1"
    description="前端开发工程师，热爱开源。"
  />
</template>
```
:::

## 带操作按钮

通过 `actions` 插槽可以在卡片中添加自定义操作按钮。

<div class="demo-block">
<LuUserCard
  name="小明"
  avatar="https://i.pravatar.cc/150?img=3"
  description="全栈工程师，专注于 Vue 和 Node.js 开发。"
>
  <template #actions>
    <LuButton type="primary" size="small">关注</LuButton>
    <LuButton size="small">发消息</LuButton>
  </template>
</LuUserCard>
</div>

::: details 查看代码
```vue
<template>
  <LuUserCard
    name="小明"
    avatar="https://i.pravatar.cc/150?img=3"
    description="全栈工程师，专注于 Vue 和 Node.js 开发。"
  >
    <template #actions>
      <LuButton type="primary" size="small">关注</LuButton>
      <LuButton size="small">发消息</LuButton>
    </template>
  </LuUserCard>
</template>
```
:::

<script setup>
import { ref } from 'vue'
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 用户名称 | `string` | 是 | — |
| avatar | 头像地址 | `string` | 否 | `''` |
| description | 用户描述信息 | `string` | 否 | `''` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| actions | 操作区域，用于放置按钮等交互元素 |
