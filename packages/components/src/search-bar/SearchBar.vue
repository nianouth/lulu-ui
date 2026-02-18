<template>
  <div class="lu-search-bar">
    <svg class="lu-search-bar__icon" viewBox="0 0 24 24" width="16" height="16">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
    </svg>
    <input
      v-model="query"
      class="lu-search-bar__input"
      :placeholder="placeholder"
      @input="handleInput"
      @keydown.enter="handleSearch"
    />
    <button v-if="query" class="lu-search-bar__clear" @click="handleClear">
      <svg viewBox="0 0 24 24" width="14" height="14"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LuSearchBar',
  props: {
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '搜索...' },
  },
  emits: ['update:modelValue', 'search', 'clear'],
  setup(props, { emit }) {
    const query = ref(props.modelValue)

    const handleInput = () => {
      emit('update:modelValue', query.value)
    }

    const handleSearch = () => {
      emit('search', query.value)
    }

    const handleClear = () => {
      query.value = ''
      emit('update:modelValue', '')
      emit('clear')
    }

    return { query, handleInput, handleSearch, handleClear }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-search-bar {
  display: flex;
  align-items: center;
  background: $bg-color;
  border: 1px solid $border-color;
  border-radius: $radius-round;
  padding: 8px 16px;
  gap: 8px;
  transition: $transition;

  &:focus-within { border-color: $primary; box-shadow: 0 0 0 3px rgba($primary, 0.1); }

  &__icon { color: $text-secondary; flex-shrink: 0; }

  &__input {
    flex: 1;
    border: none;
    outline: none;
    font-size: $font-size;
    font-family: $font-family;
    color: $text-primary;
    background: transparent;
    &::placeholder { color: $text-placeholder; }
  }

  &__clear {
    background: none; border: none; cursor: pointer; color: $text-secondary;
    display: inline-flex; padding: 2px;
    &:hover { color: $text-primary; }
  }
}
</style>
