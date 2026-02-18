<template>
  <div class="lu-badge">
    <slot />
    <sup v-if="!hidden && (content || isDot)" :class="['lu-badge__content', `lu-badge--${type}`, { 'is-dot': isDot }]">
      {{ isDot ? '' : displayValue }}
    </sup>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'LuBadge',
  props: {
    value: { type: [String, Number], default: '' },
    max: { type: Number, default: 99 },
    isDot: Boolean,
    hidden: Boolean,
    type: { type: String as () => 'primary' | 'success' | 'warning' | 'danger' | 'info', default: 'danger' },
  },
  setup(props) {
    const content = computed(() => props.value !== '' && props.value !== undefined)
    const displayValue = computed(() => {
      if (typeof props.value === 'number' && props.value > props.max) return `${props.max}+`
      return `${props.value}`
    })
    return { content, displayValue }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-badge {
  position: relative;
  display: inline-flex;

  &__content {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    font-size: 11px;
    font-weight: 500;
    line-height: 1;
    padding: 3px 6px;
    border-radius: $radius-round;
    color: #fff;
    white-space: nowrap;

    &.is-dot { width: 8px; height: 8px; padding: 0; border-radius: 50%; right: 2px; top: 2px; }
  }

  &--primary { background: $primary; }
  &--success { background: $success; }
  &--warning { background: $warning; }
  &--danger { background: $danger; }
  &--info { background: $info; }
}
</style>
