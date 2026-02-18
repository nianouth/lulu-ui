# PieChart 饼图

基于 ECharts 封装的饼图组件，用于展示各分类数据的占比关系。

> 注意：由于图表组件依赖 ECharts，在 VitePress SSR 环境下无法直接运行，因此本文档仅提供代码示例，不包含可执行的 demo。

## 基础用法

通过 `data` 属性传入饼图数据，每项包含 `name` 和 `value` 字段。

```vue
<template>
  <LuPieChart
    :data="[
      { name: '直接访问', value: 335 },
      { name: '邮件营销', value: 310 },
      { name: '联盟广告', value: 234 },
      { name: '视频广告', value: 135 },
      { name: '搜索引擎', value: 1548 }
    ]"
    width="600px"
    height="400px"
  />
</template>
```

## 环形图

通过 `radius` 属性设置内外半径，可以将饼图渲染为环形图。

```vue
<template>
  <LuPieChart
    :data="[
      { name: 'Vue', value: 40 },
      { name: 'React', value: 30 },
      { name: 'Angular', value: 15 },
      { name: 'Svelte', value: 10 },
      { name: '其他', value: 5 }
    ]"
    :radius="['40%', '70%']"
    width="600px"
    height="400px"
  />
</template>
```

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 饼图数据，每项包含 `name` 和 `value` | `Array<{ name: string, value: number }>` | — | `[]` |
| width | 图表宽度 | `string` | — | `'100%'` |
| height | 图表高度 | `string` | — | `'400px'` |
| radius | 饼图半径，可设置为数组表示内外半径（环形图） | `string \| string[]` | — | `'50%'` |
