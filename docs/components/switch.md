# Switch 开关

表示两种相互对立的状态间的切换，适用于在开/关、是/否等场景。

## 基础用法

通过 `v-model` 绑定开关状态。

<div class="demo-block">
<div class="demo-row">
  <LuSwitch v-model="value1" />
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuSwitch v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>
```
:::

## 带标签

通过默认插槽可以为开关添加文字描述。

<div class="demo-block">
<div class="demo-row">
  <LuSwitch v-model="value2">自动保存</LuSwitch>
</div>
<div class="demo-row" style="margin-top: 12px;">
  <LuSwitch v-model="value3">开启通知</LuSwitch>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuSwitch v-model="value1">自动保存</LuSwitch>
  <LuSwitch v-model="value2">开启通知</LuSwitch>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(false)
</script>
```
:::

## 禁用状态

设置 `disabled` 属性可以使开关处于不可用状态。

<div class="demo-block">
<div class="demo-row">
  <LuSwitch v-model="value4" disabled />
  <LuSwitch v-model="value5" disabled>已禁用</LuSwitch>
</div>
</div>

::: details 查看代码
```vue
<template>
  <LuSwitch v-model="value1" disabled />
  <LuSwitch v-model="value2" disabled>已禁用</LuSwitch>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(false)
const value2 = ref(true)
</script>
```
:::

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(false)
const value5 = ref(true)
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `boolean` | — | `false` |
| disabled | 是否禁用 | `boolean` | — | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: boolean)` |
| change | 状态改变时触发 | `(value: boolean)` |
