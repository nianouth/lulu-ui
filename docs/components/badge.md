# Badge 徽标

在右上角展示徽标数字或小红点，用于提醒用户待处理的消息或信息。

## 基础用法

通过 `value` 属性设置徽标显示的数值，通常套在按钮或图标外面使用。

<div class="demo-block">
<div class="demo-row" style="display: flex; gap: 24px;">
  <LuBadge :value="5">
    <LuButton>消息</LuButton>
  </LuBadge>
  <LuBadge :value="12">
    <LuButton>评论</LuButton>
  </LuBadge>
  <LuBadge value="new">
    <LuButton>新功能</LuButton>
  </LuBadge>
</div>
</div>

## 小红点

设置 `isDot` 属性可以将徽标显示为一个小红点，用于未读消息等不需要显示具体数量的场景。

<div class="demo-block">
<div class="demo-row" style="display: flex; gap: 24px;">
  <LuBadge isDot>
    <LuButton>消息</LuButton>
  </LuBadge>
  <LuBadge isDot>
    <LuButton>通知</LuButton>
  </LuBadge>
</div>
</div>

## 最大值

设置 `max` 属性可以限制徽标数值的最大显示值。当 `value` 超过 `max` 时显示 `{max}+`。

<div class="demo-block">
<div class="demo-row" style="display: flex; gap: 24px;">
  <LuBadge :value="200" :max="99">
    <LuButton>消息</LuButton>
  </LuBadge>
  <LuBadge :value="50" :max="10">
    <LuButton>评论</LuButton>
  </LuBadge>
</div>
</div>

<script setup>
import { ref } from 'vue'
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 显示的值 | `string` / `number` | — | `''` |
| max | 最大值，超过后显示 `{max}+`（仅当 value 为 number 时有效） | `number` | — | `99` |
| isDot | 是否显示为小红点 | `boolean` | — | `false` |
| hidden | 是否隐藏徽标 | `boolean` | — | `false` |
| type | 徽标类型 | `string` | `primary` / `success` / `warning` / `danger` / `info` | `danger` |
