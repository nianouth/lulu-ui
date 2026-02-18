# BarChart 柱状图

基于 ECharts 封装的柱状图组件，用于展示分类数据的对比。

> 注意：由于图表组件依赖 ECharts，在 VitePress SSR 环境下无法直接运行，因此本文档仅提供代码示例，不包含可执行的 demo。

## 基础用法

通过 `xData` 设置 X 轴分类数据，`series` 设置柱状图数据系列。

```vue
<template>
  <LuBarChart
    :xData="['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']"
    :series="[
      {
        name: '销量',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]"
    width="600px"
    height="400px"
  />
</template>
```

## 多系列柱状图

通过在 `series` 中传入多个数据系列，可以展示分组柱状图进行数据对比。

```vue
<template>
  <LuBarChart
    :xData="['一月', '二月', '三月', '四月', '五月', '六月']"
    :series="[
      {
        name: '线上渠道',
        data: [320, 450, 380, 520, 410, 600]
      },
      {
        name: '线下渠道',
        data: [220, 310, 280, 390, 350, 480]
      }
    ]"
    width="600px"
    height="400px"
  />
</template>
```

## API

### Props

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| xData | X 轴数据数组 | `string[]` | — | `[]` |
| series | 数据系列，每项包含 `name` 和 `data` | `Array<{ name: string, data: number[] }>` | — | `[]` |
| width | 图表宽度 | `string` | — | `'100%'` |
| height | 图表高度 | `string` | — | `'400px'` |
