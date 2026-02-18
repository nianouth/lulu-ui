<template>
  <div :class="['lu-input', `lu-input--${size}`, { 'is-disabled': disabled, 'is-clearable': clearable && modelValue }]">
    <input
      ref="inputRef"
      :class="['lu-input__inner']"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <span v-if="clearable && modelValue" class="lu-input__clear" @click="handleClear">
      <svg viewBox="0 0 24 24" width="14" height="14"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LuInput',
  props: {
    modelValue: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    disabled: Boolean,
    readonly: Boolean,
    clearable: Boolean,
    size: { type: String as () => 'small' | 'default' | 'large', default: 'default' },
  },
  emits: ['update:modelValue', 'input', 'focus', 'blur', 'clear'],
  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement>()

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      emit('update:modelValue', val)
      emit('input', val)
    }

    const handleClear = () => {
      emit('update:modelValue', '')
      emit('clear')
      inputRef.value?.focus()
    }

    return { inputRef, handleInput, handleClear }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-input {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;

  &__inner {
    width: 100%;
    font-family: $font-family;
    font-size: $font-size;
    color: $text-primary;
    background: $bg-color;
    border: 1px solid $border-color;
    border-radius: $radius;
    padding: 8px 12px;
    outline: none;
    transition: $transition;

    &::placeholder { color: $text-placeholder; }
    &:focus { border-color: $primary; box-shadow: 0 0 0 3px rgba($primary, 0.1); }
  }

  &__clear {
    position: absolute;
    right: 8px;
    cursor: pointer;
    color: $text-secondary;
    display: inline-flex;
    &:hover { color: $text-primary; }
  }

  &--small .lu-input__inner { font-size: $font-size-sm; padding: 5px 8px; }
  &--large .lu-input__inner { font-size: $font-size-md; padding: 12px 16px; }

  &.is-disabled .lu-input__inner {
    background: $bg-page; color: $text-disabled; cursor: not-allowed;
  }
  &.is-clearable .lu-input__inner { padding-right: 28px; }
}
</style>
