# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

通过 `v-model` 绑定选中值，`options` 传入选项数据。

<div class="demo-block">
<div class="demo-row">
  <LuSelect v-model="value1" :options="options1" placeholder="请选择" />
</div>
<p style="margin-top: 8px; color: #666; font-size: 14px;">当前选中：{{ value1 || '无' }}</p>
</div>

## 禁用状态

设置 `disabled` 属性可以使选择器处于不可用状态。

<div class="demo-block">
<div class="demo-row">
  <LuSelect v-model="value2" :options="options1" placeholder="禁用状态" disabled />
</div>
</div>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('apple')

const options1 = ref([
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橘子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '西瓜', value: 'watermelon' },
])
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `string` / `number` | — | `''` |
| options | 选项数据 | `Array<{ label: string, value: string \| number }>` | — | `[]` |
| placeholder | 占位文本 | `string` | — | `'请选择'` |
| disabled | 是否禁用 | `boolean` | — | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: string \| number)` |
| change | 选中值变化时触发 | `(value: string \| number)` |
