# Modal 对话框

在保留当前页面状态的情况下，弹出一个对话框来承载用户操作或展示信息。

## 基础用法

通过 `v-model` 控制对话框的显示与隐藏。设置 `title` 属性来定义标题。

<div class="demo-block">
<div class="demo-row">
  <LuButton type="primary" @click="visible1 = true">打开对话框</LuButton>
</div>
</div>

<LuModal v-model="visible1" title="基础对话框">
  <p>这是一段对话框的内容。你可以在这里放置任何信息。</p>
</LuModal>

## 带 Footer

通过 `footer` 具名插槽可以在对话框底部添加操作按钮。

<div class="demo-block">
<div class="demo-row">
  <LuButton type="primary" @click="visible2 = true">带 Footer 的对话框</LuButton>
</div>
</div>

<LuModal v-model="visible2" title="确认操作">
  <p>确定要执行此操作吗？此操作不可撤销。</p>
  <template #footer>
    <LuButton @click="visible2 = false">取消</LuButton>
    <LuButton type="primary" @click="visible2 = false">确定</LuButton>
  </template>
</LuModal>

<script setup>
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 是否显示对话框 | `boolean` | — | `false` |
| title | 对话框标题 | `string` | — | `''` |
| size | 对话框尺寸 | `string` | `small` / `default` / `large` | `default` |
| closable | 是否显示关闭按钮 | `boolean` | — | `true` |
| closeOnOverlay | 点击遮罩层是否关闭 | `boolean` | — | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 显示状态变化时触发 | `(value: boolean)` |
| close | 对话框关闭时触发 | — |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 对话框主体内容 |
| footer | 对话框底部内容 |
