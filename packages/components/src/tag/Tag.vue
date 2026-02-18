<template>
  <span :class="['lu-tag', `lu-tag--${type}`, `lu-tag--${size}`]">
    <slot />
    <svg v-if="closable" class="lu-tag__close" viewBox="0 0 24 24" width="12" height="12" @click="$emit('close')">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LuTag',
  props: {
    type: { type: String as () => 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default', default: 'default' },
    size: { type: String as () => 'small' | 'default' | 'large', default: 'default' },
    closable: Boolean,
  },
  emits: ['close'],
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: $font-size-xs;
  padding: 2px 8px;
  border-radius: $radius-sm;
  border: 1px solid $border-color;
  color: $text-regular;
  background: $bg-page;
  line-height: 1.6;

  &--primary { background: $primary-bg; color: $primary; border-color: transparent; }
  &--success { background: $success-bg; color: $success; border-color: transparent; }
  &--warning { background: $warning-bg; color: $warning; border-color: transparent; }
  &--danger { background: $danger-bg; color: $danger; border-color: transparent; }
  &--info { background: $info-bg; color: $info; border-color: transparent; }

  &--small { font-size: 10px; padding: 0 4px; }
  &--large { font-size: $font-size; padding: 4px 12px; }

  &__close {
    cursor: pointer;
    border-radius: 50%;
    transition: $transition-fast;
    &:hover { background: rgba(0,0,0,0.1); }
  }
}
</style>
