# Alert 提示

用于页面中展示重要的提示信息，不会自动消失。

## 四种类型

使用 `type` 属性来定义提示的类型，支持 `info`、`success`、`warning`、`danger` 四种类型。

<div class="demo-block">
<div class="demo-row">
  <LuAlert type="info">这是一条信息提示。</LuAlert>
</div>
<div class="demo-row" style="margin-top: 12px;">
  <LuAlert type="success">这是一条成功提示。</LuAlert>
</div>
<div class="demo-row" style="margin-top: 12px;">
  <LuAlert type="warning">这是一条警告提示。</LuAlert>
</div>
<div class="demo-row" style="margin-top: 12px;">
  <LuAlert type="danger">这是一条危险提示。</LuAlert>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuAlert type="info">这是一条信息提示。</LuAlert>
  <LuAlert type="success">这是一条成功提示。</LuAlert>
  <LuAlert type="warning">这是一条警告提示。</LuAlert>
  <LuAlert type="danger">这是一条危险提示。</LuAlert>
</template>
```
:::

## 带标题

通过 `title` 属性可以为提示添加标题，用于更详细的说明。

<div class="demo-block">
<div class="demo-row">
  <LuAlert type="info" title="提示">这里是信息提示的详细说明文字，可以描述具体的内容信息。</LuAlert>
</div>
<div class="demo-row" style="margin-top: 12px;">
  <LuAlert type="success" title="成功">操作已成功完成，数据已保存到服务器。</LuAlert>
</div>
<div class="demo-row" style="margin-top: 12px;">
  <LuAlert type="warning" title="警告">请注意，当前操作可能会影响其他数据。</LuAlert>
</div>
<div class="demo-row" style="margin-top: 12px;">
  <LuAlert type="danger" title="错误">提交失败，请检查网络连接后重试。</LuAlert>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuAlert type="info" title="提示">这里是信息提示的详细说明文字，可以描述具体的内容信息。</LuAlert>
  <LuAlert type="success" title="成功">操作已成功完成，数据已保存到服务器。</LuAlert>
  <LuAlert type="warning" title="警告">请注意，当前操作可能会影响其他数据。</LuAlert>
  <LuAlert type="danger" title="错误">提交失败，请检查网络连接后重试。</LuAlert>
</template>
```
:::

<script setup>
import { ref } from 'vue'
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 提示标题 | `string` | — | — |
| type | 提示类型 | `string` | `info` / `success` / `warning` / `danger` | `info` |
| closable | 是否可关闭 | `boolean` | — | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭提示时触发 | — |
