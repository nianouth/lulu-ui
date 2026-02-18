<template>
  <Transition name="lu-alert">
    <div v-if="visible" :class="['lu-alert', `lu-alert--${type}`]">
      <div class="lu-alert__content">
        <p v-if="title" class="lu-alert__title">{{ title }}</p>
        <p class="lu-alert__description"><slot /></p>
      </div>
      <button v-if="closable" class="lu-alert__close" @click="visible = false; $emit('close')">
        <svg viewBox="0 0 24 24" width="14" height="14"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
      </button>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LuAlert',
  props: {
    title: String,
    type: { type: String as () => 'success' | 'warning' | 'danger' | 'info', default: 'info' },
    closable: { type: Boolean, default: true },
  },
  emits: ['close'],
  setup() {
    const visible = ref(true)
    return { visible }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-alert {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: $radius-md;
  font-size: $font-size;

  &--info { background: $info-bg; color: $info; }
  &--success { background: $success-bg; color: $success; }
  &--warning { background: $warning-bg; color: $warning; }
  &--danger { background: $danger-bg; color: $danger; }

  &__title { font-weight: 600; margin-bottom: 4px; }
  &__description { line-height: 1.5; }

  &__close {
    background: none; border: none; cursor: pointer; color: inherit; opacity: 0.6;
    padding: 2px; display: inline-flex; flex-shrink: 0;
    &:hover { opacity: 1; }
  }
}

.lu-alert-enter-active { transition: all 0.3s ease; }
.lu-alert-leave-active { transition: all 0.2s ease; }
.lu-alert-enter-from, .lu-alert-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
