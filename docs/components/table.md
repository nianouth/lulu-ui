# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选等操作。

## 基础用法

通过 `columns` 定义列配置，`data` 传入表格数据。

<div class="demo-block">
<LuTable :columns="columns" :data="tableData" />
</div>

## 带斑马纹

设置 `striped` 属性可以创建带有斑马纹的表格，便于区分不同行的数据。

<div class="demo-block">
<LuTable :columns="columns" :data="tableData" striped />
</div>

## 带边框

设置 `bordered` 属性可以为表格添加纵向边框。

<div class="demo-block">
<LuTable :columns="columns" :data="tableData" bordered />
</div>

## 自定义列插槽

通过具名插槽可以自定义列的渲染内容。插槽名对应 `column.key`，插槽参数包含 `row`（行数据）和 `index`（行索引）。

<div class="demo-block">
<LuTable :columns="columnsWithAction" :data="tableData">
  <template #status="{ row }">
    <LuTag :type="row.status === '已完成' ? 'success' : 'warning'">{{ row.status }}</LuTag>
  </template>
  <template #action="{ row }">
    <LuButton type="primary" size="small">编辑</LuButton>
    <LuButton type="danger" size="small">删除</LuButton>
  </template>
</LuTable>
</div>

<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名', width: '120px' },
  { key: 'age', title: '年龄', width: '80px' },
  { key: 'address', title: '地址' },
])

const columnsWithAction = ref([
  { key: 'name', title: '姓名', width: '120px' },
  { key: 'status', title: '状态', width: '100px' },
  { key: 'address', title: '地址' },
  { key: 'action', title: '操作', width: '180px' },
])

const tableData = ref([
  { name: '张三', age: 28, address: '北京市朝阳区', status: '已完成' },
  { name: '李四', age: 32, address: '上海市浦东新区', status: '进行中' },
  { name: '王五', age: 25, address: '广州市天河区', status: '已完成' },
  { name: '赵六', age: 30, address: '深圳市南山区', status: '进行中' },
])
</script>

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| columns | 列配置 | `Array<{ key: string, title: string, width?: string }>` | — | — |
| data | 表格数据 | `Array<Record<string, any>>` | — | `[]` |
| striped | 是否显示斑马纹 | `boolean` | — | `false` |
| bordered | 是否显示纵向边框 | `boolean` | — | `false` |

### Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| [column.key] | 自定义列内容 | `{ row: Record<string, any>, index: number }` |
