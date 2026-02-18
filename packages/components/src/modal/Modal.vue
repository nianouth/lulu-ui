<template>
  <Teleport to="body">
    <Transition name="lu-modal">
      <div v-if="modelValue" class="lu-modal-overlay" @click.self="handleOverlayClick">
        <div :class="['lu-modal', `lu-modal--${size}`]">
          <div class="lu-modal__header">
            <span class="lu-modal__title">{{ title }}</span>
            <button v-if="closable" class="lu-modal__close" @click="close">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
            </button>
          </div>
          <div class="lu-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="lu-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LuModal',
  props: {
    modelValue: Boolean,
    title: { type: String, default: '' },
    size: { type: String as () => 'small' | 'default' | 'large', default: 'default' },
    closable: { type: Boolean, default: true },
    closeOnOverlay: { type: Boolean, default: true },
  },
  emits: ['update:modelValue', 'close'],
  setup(props, { emit }) {
    const close = () => {
      emit('update:modelValue', false)
      emit('close')
    }
    const handleOverlayClick = () => {
      if (props.closeOnOverlay) close()
    }
    return { close, handleOverlayClick }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(2px);
}

.lu-modal {
  background: $bg-color;
  border-radius: $radius-lg;
  box-shadow: $shadow-lg;
  width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;

  &--small { width: 360px; }
  &--large { width: 640px; }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid $border-light;
  }

  &__title { font-size: $font-size-md; font-weight: 600; color: $text-primary; }

  &__close {
    background: none; border: none; cursor: pointer; color: $text-secondary;
    padding: 4px; border-radius: $radius-sm; transition: $transition-fast;
    display: inline-flex;
    &:hover { background: $bg-page; color: $text-primary; }
  }

  &__body { padding: 20px; overflow-y: auto; font-size: $font-size; color: $text-regular; line-height: 1.6; }

  &__footer {
    padding: 12px 20px;
    border-top: 1px solid $border-light;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
}

.lu-modal-enter-active { transition: all 0.25s ease; }
.lu-modal-leave-active { transition: all 0.2s ease; }
.lu-modal-enter-from, .lu-modal-leave-to { opacity: 0;
  .lu-modal { transform: scale(0.95) translateY(-10px); }
}
</style>
