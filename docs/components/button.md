# Button 按钮

常用的操作按钮，支持多种类型、尺寸和状态。

## 基础用法

使用 `type` 属性来定义按钮的样式类型。

<div class="demo-block">
<div class="demo-row">
  <LuButton>默认按钮</LuButton>
  <LuButton type="primary">主要按钮</LuButton>
  <LuButton type="success">成功按钮</LuButton>
  <LuButton type="warning">警告按钮</LuButton>
  <LuButton type="danger">危险按钮</LuButton>
  <LuButton type="info">信息按钮</LuButton>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuButton>默认按钮</LuButton>
  <LuButton type="primary">主要按钮</LuButton>
  <LuButton type="success">成功按钮</LuButton>
  <LuButton type="warning">警告按钮</LuButton>
  <LuButton type="danger">危险按钮</LuButton>
  <LuButton type="info">信息按钮</LuButton>
</template>
```
:::

## 朴素按钮

设置 `plain` 属性可以显示朴素样式的按钮，背景色更浅、更轻量。

<div class="demo-block">
<div class="demo-row">
  <LuButton plain>朴素按钮</LuButton>
  <LuButton type="primary" plain>主要按钮</LuButton>
  <LuButton type="success" plain>成功按钮</LuButton>
  <LuButton type="warning" plain>警告按钮</LuButton>
  <LuButton type="danger" plain>危险按钮</LuButton>
  <LuButton type="info" plain>信息按钮</LuButton>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuButton plain>朴素按钮</LuButton>
  <LuButton type="primary" plain>主要按钮</LuButton>
  <LuButton type="success" plain>成功按钮</LuButton>
  <LuButton type="warning" plain>警告按钮</LuButton>
  <LuButton type="danger" plain>危险按钮</LuButton>
  <LuButton type="info" plain>信息按钮</LuButton>
</template>
```
:::

## 圆角按钮

设置 `round` 属性可以使按钮变为圆角样式。

<div class="demo-block">
<div class="demo-row">
  <LuButton round>圆角按钮</LuButton>
  <LuButton type="primary" round>主要按钮</LuButton>
  <LuButton type="success" round>成功按钮</LuButton>
  <LuButton type="warning" round>警告按钮</LuButton>
  <LuButton type="danger" round>危险按钮</LuButton>
  <LuButton type="info" round>信息按钮</LuButton>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuButton round>圆角按钮</LuButton>
  <LuButton type="primary" round>主要按钮</LuButton>
  <LuButton type="success" round>成功按钮</LuButton>
  <LuButton type="warning" round>警告按钮</LuButton>
  <LuButton type="danger" round>危险按钮</LuButton>
  <LuButton type="info" round>信息按钮</LuButton>
</template>
```
:::

## 不同尺寸

使用 `size` 属性来控制按钮的大小，支持 `small`、`default`、`large` 三种尺寸。

<div class="demo-block">
<div class="demo-row">
  <LuButton type="primary" size="small">小型按钮</LuButton>
  <LuButton type="primary">默认按钮</LuButton>
  <LuButton type="primary" size="large">大型按钮</LuButton>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuButton type="primary" size="small">小型按钮</LuButton>
  <LuButton type="primary">默认按钮</LuButton>
  <LuButton type="primary" size="large">大型按钮</LuButton>
</template>
```
:::

## 禁用状态

设置 `disabled` 属性可以将按钮置为不可用状态。

<div class="demo-block">
<div class="demo-row">
  <LuButton disabled>禁用按钮</LuButton>
  <LuButton type="primary" disabled>主要按钮</LuButton>
  <LuButton type="success" disabled>成功按钮</LuButton>
  <LuButton type="warning" disabled>警告按钮</LuButton>
  <LuButton type="danger" disabled>危险按钮</LuButton>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuButton disabled>禁用按钮</LuButton>
  <LuButton type="primary" disabled>主要按钮</LuButton>
  <LuButton type="success" disabled>成功按钮</LuButton>
  <LuButton type="warning" disabled>警告按钮</LuButton>
  <LuButton type="danger" disabled>危险按钮</LuButton>
</template>
```
:::

## 加载状态

设置 `loading` 属性可以让按钮显示加载中的状态，此时按钮不可点击。

<div class="demo-block">
<div class="demo-row">
  <LuButton type="primary" :loading="loading1" @click="loading1 = true">点击加载</LuButton>
  <LuButton type="success" loading>加载中</LuButton>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuButton type="primary" :loading="loading" @click="loading = true">点击加载</LuButton>
  <LuButton type="success" loading>加载中</LuButton>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
</script>
```
:::

<script setup>
import { ref } from 'vue'

const loading1 = ref(false)
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | `string` | `primary` / `success` / `warning` / `danger` / `info` / `default` | `default` |
| size | 按钮尺寸 | `string` | `small` / `default` / `large` | `default` |
| plain | 是否为朴素按钮 | `boolean` | — | `false` |
| round | 是否为圆角按钮 | `boolean` | — | `false` |
| circle | 是否为圆形按钮 | `boolean` | — | `false` |
| disabled | 是否禁用 | `boolean` | — | `false` |
| loading | 是否显示加载状态 | `boolean` | — | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发（禁用和加载状态下不触发） | `(event: MouseEvent)` |
