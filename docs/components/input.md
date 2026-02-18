# Input 输入框

通过键盘输入字符的基础表单组件，支持清除、禁用等功能。

## 基础用法

通过 `v-model` 实现双向数据绑定。

<div class="demo-block">
<div class="demo-row">
  <LuInput v-model="input1" placeholder="请输入内容" />
</div>
</div>

## 可清除

设置 `clearable` 属性可以在输入框有内容时显示清除按钮。

<div class="demo-block">
<div class="demo-row">
  <LuInput v-model="input2" placeholder="可清除输入框" clearable />
</div>
</div>

## 禁用状态

设置 `disabled` 属性可以使输入框处于不可用状态。

<div class="demo-block">
<div class="demo-row">
  <LuInput v-model="input3" placeholder="禁用状态" disabled />
</div>
</div>

## 不同尺寸

使用 `size` 属性来控制输入框的大小，支持 `small`、`default`、`large` 三种尺寸。

<div class="demo-block">
<div class="demo-row">
  <LuInput v-model="input4" placeholder="小型输入框" size="small" />
</div>
<div class="demo-row">
  <LuInput v-model="input5" placeholder="默认输入框" />
</div>
<div class="demo-row">
  <LuInput v-model="input6" placeholder="大型输入框" size="large" />
</div>
</div>

<script setup>
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('可清除的内容')
const input3 = ref('禁用的输入框')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `string` / `number` | — | `''` |
| type | 输入框类型 | `string` | `text` / `password` / `number` 等原生 input type | `text` |
| placeholder | 占位文本 | `string` | — | `''` |
| disabled | 是否禁用 | `boolean` | — | `false` |
| readonly | 是否只读 | `boolean` | — | `false` |
| clearable | 是否可清除 | `boolean` | — | `false` |
| size | 输入框尺寸 | `string` | `small` / `default` / `large` | `default` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: string)` |
| input | 输入时触发 | `(value: string)` |
| focus | 获取焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| clear | 点击清除按钮时触发 | — |
