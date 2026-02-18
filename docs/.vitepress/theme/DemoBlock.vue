<template>
  <div class="demo-container">
    <div class="demo-block">
      <slot />
    </div>
    <div class="demo-actions">
      <button class="demo-toggle" @click="showCode = !showCode">
        <svg v-if="!showCode" viewBox="0 0 24 24" width="16" height="16">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" width="16" height="16">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
        </svg>
        {{ showCode ? '隐藏代码' : '查看代码' }}
      </button>
    </div>
    <Transition name="code-slide">
      <div v-show="showCode" class="demo-source">
        <div class="demo-source__inner">
          <slot name="code" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DemoBlock',
  setup() {
    const showCode = ref(false)
    return { showCode }
  },
})
</script>

<style>
.demo-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.demo-container .demo-block {
  padding: 24px;
  border: none;
  border-radius: 0;
  margin: 0;
}

.demo-actions {
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--vp-c-divider);
  padding: 8px;
}

.demo-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-family: inherit;
}

.demo-toggle:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.demo-source {
  border-top: 1px solid var(--vp-c-divider);
  overflow: hidden;
}

.demo-source__inner {
  padding: 0;
}

.demo-source__inner div[class*="language-"] {
  margin: 0 !important;
  border-radius: 0 !important;
}

.code-slide-enter-active {
  transition: all 0.3s ease;
}
.code-slide-leave-active {
  transition: all 0.2s ease;
}
.code-slide-enter-from,
.code-slide-leave-to {
  opacity: 0;
  max-height: 0;
}
.code-slide-enter-to,
.code-slide-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>
