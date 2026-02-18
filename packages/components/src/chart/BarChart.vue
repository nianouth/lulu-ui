<template>
  <div ref="chartRef" :style="{ width, height }" class="lu-chart" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useChart } from './useChart'

export default defineComponent({
  name: 'LuBarChart',
  props: {
    xData: { type: Array as () => string[], default: () => [] },
    series: { type: Array as () => { name: string; data: number[] }[], default: () => [] },
    width: { type: String, default: '100%' },
    height: { type: String, default: '300px' },
  },
  setup(props) {
    const chartRef = ref<HTMLElement>()

    const options = computed(() => ({
      tooltip: { trigger: 'axis' },
      legend: { data: props.series.map((s) => s.name) },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { type: 'category', data: props.xData },
      yAxis: { type: 'value' },
      series: props.series.map((s) => ({
        name: s.name,
        type: 'bar',
        data: s.data,
        barMaxWidth: 40,
        itemStyle: { borderRadius: [4, 4, 0, 0] },
      })),
    }))

    useChart(chartRef, options)

    return { chartRef }
  },
})
</script>
