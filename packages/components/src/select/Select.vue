<template>
  <div :class="['lu-select', { 'is-open': isOpen, 'is-disabled': disabled }]" ref="selectRef">
    <div class="lu-select__trigger" @click="toggle">
      <span :class="['lu-select__value', { 'is-placeholder': !selectedLabel }]">
        {{ selectedLabel || placeholder }}
      </span>
      <svg class="lu-select__arrow" viewBox="0 0 24 24" width="14" height="14">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
      </svg>
    </div>
    <Transition name="lu-zoom">
      <div v-show="isOpen" class="lu-select__dropdown">
        <div
          v-for="opt in options"
          :key="opt.value"
          :class="['lu-select__option', { 'is-selected': opt.value === modelValue }]"
          @click="handleSelect(opt)"
        >
          {{ opt.label }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'

export interface SelectOption {
  label: string
  value: string | number
}

export default defineComponent({
  name: 'LuSelect',
  props: {
    modelValue: { type: [String, Number], default: '' },
    options: { type: Array as () => SelectOption[], default: () => [] },
    placeholder: { type: String, default: '请选择' },
    disabled: Boolean,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const isOpen = ref(false)
    const selectRef = ref<HTMLElement>()

    const selectedLabel = computed(() => {
      const opt = props.options.find((o) => o.value === props.modelValue)
      return opt ? opt.label : ''
    })

    const toggle = () => {
      if (!props.disabled) isOpen.value = !isOpen.value
    }

    const handleSelect = (opt: SelectOption) => {
      emit('update:modelValue', opt.value)
      emit('change', opt.value)
      isOpen.value = false
    }

    const onClickOutside = (e: MouseEvent) => {
      if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
        isOpen.value = false
      }
    }

    onMounted(() => document.addEventListener('click', onClickOutside))
    onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))

    return { isOpen, selectRef, selectedLabel, toggle, handleSelect }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-select {
  display: inline-flex;
  position: relative;
  width: 100%;

  &__trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border: 1px solid $border-color;
    border-radius: $radius;
    background: $bg-color;
    cursor: pointer;
    transition: $transition;
    font-size: $font-size;

    &:hover { border-color: $primary-light; }
  }

  &__value { color: $text-primary;
    &.is-placeholder { color: $text-placeholder; }
  }

  &__arrow {
    color: $text-secondary;
    transition: $transition;
  }

  &.is-open {
    .lu-select__trigger { border-color: $primary; box-shadow: 0 0 0 3px rgba($primary, 0.1); }
    .lu-select__arrow { transform: rotate(180deg); }
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: $bg-color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: $shadow-md;
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
    padding: 4px;
  }

  &__option {
    padding: 8px 12px;
    font-size: $font-size;
    color: $text-primary;
    border-radius: $radius-sm;
    cursor: pointer;
    transition: $transition-fast;

    &:hover { background: $primary-bg; color: $primary; }
    &.is-selected { color: $primary; font-weight: 500; background: $primary-bg; }
  }

  &.is-disabled {
    .lu-select__trigger { background: $bg-page; cursor: not-allowed; }
  }
}

.lu-zoom-enter-active { transition: all 0.2s ease; }
.lu-zoom-leave-active { transition: all 0.15s ease; }
.lu-zoom-enter-from, .lu-zoom-leave-to { opacity: 0; transform: scaleY(0.9); transform-origin: top; }
</style>
