import { ref, onMounted, onBeforeUnmount, watch, shallowRef } from 'vue'
import type { Ref } from 'vue'

export function useChart(chartRef: Ref<HTMLElement | undefined>, options: Ref<any>) {
  const chartInstance = shallowRef<any>(null)

  const initChart = async () => {
    if (!chartRef.value) return
    const echarts = await import('echarts')
    chartInstance.value = echarts.init(chartRef.value)
    chartInstance.value.setOption(options.value)
  }

  const handleResize = () => {
    chartInstance.value?.resize()
  }

  onMounted(() => {
    initChart()
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    chartInstance.value?.dispose()
  })

  watch(options, (val) => {
    chartInstance.value?.setOption(val, true)
  }, { deep: true })

  return { chartInstance }
}
