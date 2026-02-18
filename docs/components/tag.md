# Tag 标签

用于标记和选择，展示分类或属性信息。

## 各类型标签

使用 `type` 属性来定义标签的颜色类型。

<div class="demo-block">
<div class="demo-row">
  <LuTag>默认标签</LuTag>
  <LuTag type="primary">主要标签</LuTag>
  <LuTag type="success">成功标签</LuTag>
  <LuTag type="warning">警告标签</LuTag>
  <LuTag type="danger">危险标签</LuTag>
  <LuTag type="info">信息标签</LuTag>
</div>
</div>

## 不同尺寸

使用 `size` 属性来控制标签的大小。

<div class="demo-block">
<div class="demo-row">
  <LuTag type="primary" size="small">小型标签</LuTag>
  <LuTag type="primary">默认标签</LuTag>
  <LuTag type="primary" size="large">大型标签</LuTag>
</div>
</div>

## 可关闭标签

设置 `closable` 属性可以使标签显示关闭按钮。关闭时会触发 `close` 事件。

<div class="demo-block">
<div class="demo-row">
  <LuTag v-for="tag in tags" :key="tag.name" :type="tag.type" closable @close="handleClose(tag)">
    {{ tag.name }}
  </LuTag>
</div>
</div>

<script setup>
import { ref } from 'vue'

const tags = ref([
  { name: '标签一', type: 'primary' },
  { name: '标签二', type: 'success' },
  { name: '标签三', type: 'warning' },
  { name: '标签四', type: 'danger' },
])

const handleClose = (tag) => {
  tags.value = tags.value.filter(t => t !== tag)
}
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 标签类型 | `string` | `primary` / `success` / `warning` / `danger` / `info` / `default` | `default` |
| size | 标签尺寸 | `string` | `small` / `default` / `large` | `default` |
| closable | 是否可关闭 | `boolean` | — | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 点击关闭按钮时触发 | — |
