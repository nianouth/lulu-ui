<template>
  <div ref="chartRef" :style="{ width, height }" class="lu-chart" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useChart } from './useChart'

export default defineComponent({
  name: 'LuLineChart',
  props: {
    xData: { type: Array as () => string[], default: () => [] },
    series: { type: Array as () => { name: string; data: number[] }[], default: () => [] },
    width: { type: String, default: '100%' },
    height: { type: String, default: '300px' },
    smooth: { type: Boolean, default: true },
  },
  setup(props) {
    const chartRef = ref<HTMLElement>()

    const options = computed(() => ({
      tooltip: { trigger: 'axis' },
      legend: { data: props.series.map((s) => s.name) },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { type: 'category', data: props.xData, boundaryGap: false },
      yAxis: { type: 'value' },
      series: props.series.map((s) => ({
        name: s.name,
        type: 'line',
        data: s.data,
        smooth: props.smooth,
        areaStyle: { opacity: 0.1 },
      })),
    }))

    useChart(chartRef, options)

    return { chartRef }
  },
})
</script>

<style lang="scss">
.lu-chart { min-height: 200px; }
</style>
