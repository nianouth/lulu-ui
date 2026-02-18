<template>
  <button
    :class="['lu-switch', { 'is-checked': modelValue, 'is-disabled': disabled }]"
    role="switch"
    :aria-checked="modelValue"
    @click="toggle"
  >
    <span class="lu-switch__core">
      <span class="lu-switch__dot" />
    </span>
    <span v-if="$slots.default" class="lu-switch__label"><slot /></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LuSwitch',
  props: {
    modelValue: Boolean,
    disabled: Boolean,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const toggle = () => {
      if (props.disabled) return
      const val = !props.modelValue
      emit('update:modelValue', val)
      emit('change', val)
    }
    return { toggle }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: $font-family;

  &__core {
    position: relative;
    width: 40px;
    height: 22px;
    background: $border-color;
    border-radius: $radius-round;
    transition: $transition;
  }

  &__dot {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    box-shadow: $shadow-sm;
    transition: $transition;
  }

  &__label { font-size: $font-size; color: $text-regular; }

  &.is-checked {
    .lu-switch__core { background: $primary; }
    .lu-switch__dot { left: 20px; }
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
