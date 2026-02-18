# LineChart 折线图

基于 ECharts 封装的折线图组件，用于展示数据的变化趋势。

> 注意：由于图表组件依赖 ECharts，在 VitePress SSR 环境下无法直接运行，因此本文档仅提供代码示例，不包含可执行的 demo。

## 基础用法

通过 `xData` 设置 X 轴数据，`series` 设置折线数据系列。

```vue
<template>
  <LuLineChart
    :xData="['一月', '二月', '三月', '四月', '五月', '六月']"
    :series="[
      {
        name: '销售额',
        data: [820, 932, 901, 934, 1290, 1330]
      }
    ]"
    width="600px"
    height="400px"
  />
</template>
```

## 多条折线

通过在 `series` 中传入多个数据系列，可以展示多条折线进行对比。

```vue
<template>
  <LuLineChart
    :xData="['一月', '二月', '三月', '四月', '五月', '六月']"
    :series="[
      {
        name: '产品A',
        data: [120, 200, 150, 80, 70, 110]
      },
      {
        name: '产品B',
        data: [60, 140, 190, 230, 120, 160]
      }
    ]"
    width="600px"
    height="400px"
  />
</template>
```

## 平滑曲线

设置 `smooth` 属性为 `true`，可以将折线渲染为平滑曲线。

```vue
<template>
  <LuLineChart
    :xData="['一月', '二月', '三月', '四月', '五月', '六月']"
    :series="[
      {
        name: '访问量',
        data: [320, 532, 601, 734, 890, 1030]
      }
    ]"
    width="600px"
    height="400px"
    smooth
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
| smooth | 是否显示为平滑曲线 | `boolean` | — | `false` |
