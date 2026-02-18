<template>
  <div class="lu-tabs">
    <div class="lu-tabs__header">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="['lu-tabs__item', { 'is-active': modelValue === tab.name }]"
        @click="$emit('update:modelValue', tab.name)"
      >
        {{ tab.label }}
      </div>
      <div class="lu-tabs__line" :style="lineStyle" />
    </div>
    <div class="lu-tabs__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export interface TabItem {
  name: string
  label: string
}

export default defineComponent({
  name: 'LuTabs',
  props: {
    modelValue: { type: String, default: '' },
    tabs: { type: Array as () => TabItem[], default: () => [] },
  },
  emits: ['update:modelValue'],
  setup(props) {
    const lineStyle = computed(() => {
      const idx = props.tabs.findIndex((t) => t.name === props.modelValue)
      if (idx < 0) return {}
      const width = 100 / props.tabs.length
      return { width: `${width}%`, transform: `translateX(${idx * 100}%)` }
    })
    return { lineStyle }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-tabs {
  &__header {
    display: flex;
    position: relative;
    border-bottom: 1px solid $border-color;
  }

  &__item {
    flex: 1;
    text-align: center;
    padding: 10px 16px;
    font-size: $font-size;
    color: $text-secondary;
    cursor: pointer;
    transition: $transition;
    font-weight: 500;

    &:hover { color: $primary; }
    &.is-active { color: $primary; }
  }

  &__line {
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 2px;
    background: $primary;
    border-radius: 1px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__content { padding: 16px 0; }
}
</style>
