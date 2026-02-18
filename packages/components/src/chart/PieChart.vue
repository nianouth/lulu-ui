<template>
  <div ref="chartRef" :style="{ width, height }" class="lu-chart" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useChart } from './useChart'

export default defineComponent({
  name: 'LuPieChart',
  props: {
    data: { type: Array as () => { name: string; value: number }[], default: () => [] },
    width: { type: String, default: '100%' },
    height: { type: String, default: '300px' },
    radius: { type: Array as () => string[], default: () => ['40%', '70%'] },
  },
  setup(props) {
    const chartRef = ref<HTMLElement>()

    const options = computed(() => ({
      tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
      legend: { orient: 'vertical', left: 'left' },
      series: [{
        type: 'pie',
        radius: props.radius,
        data: props.data,
        emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.2)' } },
        label: { formatter: '{b}\n{d}%' },
      }],
    }))

    useChart(chartRef, options)

    return { chartRef }
  },
})
</script>
