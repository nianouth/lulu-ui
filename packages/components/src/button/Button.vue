<template>
  <button
    :class="[
      'lu-button',
      `lu-button--${type}`,
      `lu-button--${size}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="lu-button__loading">
      <svg viewBox="0 0 24 24" class="lu-icon-loading">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="31.4" stroke-linecap="round" />
      </svg>
    </span>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LuButton',
  props: {
    type: {
      type: String as () => 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default',
      default: 'default',
    },
    size: {
      type: String as () => 'small' | 'default' | 'large',
      default: 'default',
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    loading: Boolean,
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      if (!props.disabled && !props.loading) {
        emit('click', e)
      }
    }
    return { handleClick }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: $font-family;
  font-size: $font-size;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid $border-color;
  border-radius: $radius;
  padding: 8px 16px;
  background: $bg-color;
  color: $text-primary;
  transition: $transition;
  outline: none;
  user-select: none;

  &:hover { border-color: $primary-light; color: $primary; }
  &:active { border-color: $primary-dark; color: $primary-dark; }

  &--primary {
    background: $primary; border-color: $primary; color: #fff;
    &:hover { background: $primary-light; border-color: $primary-light; }
    &:active { background: $primary-dark; border-color: $primary-dark; }
    &.is-plain { background: $primary-bg; color: $primary; border-color: $primary-light;
      &:hover { background: $primary; color: #fff; }
    }
  }
  &--success {
    background: $success; border-color: $success; color: #fff;
    &:hover { background: $success-light; border-color: $success-light; }
    &.is-plain { background: $success-bg; color: $success; border-color: $success-light;
      &:hover { background: $success; color: #fff; }
    }
  }
  &--warning {
    background: $warning; border-color: $warning; color: #fff;
    &:hover { background: $warning-light; border-color: $warning-light; }
    &.is-plain { background: $warning-bg; color: $warning; border-color: $warning-light;
      &:hover { background: $warning; color: #fff; }
    }
  }
  &--danger {
    background: $danger; border-color: $danger; color: #fff;
    &:hover { background: $danger-light; border-color: $danger-light; }
    &.is-plain { background: $danger-bg; color: $danger; border-color: $danger-light;
      &:hover { background: $danger; color: #fff; }
    }
  }
  &--info {
    background: $info; border-color: $info; color: #fff;
    &:hover { background: $info-light; border-color: $info-light; }
    &.is-plain { background: $info-bg; color: $info; border-color: $info-light;
      &:hover { background: $info; color: #fff; }
    }
  }
  &--default { }

  &--small { font-size: $font-size-sm; padding: 5px 12px; }
  &--large { font-size: $font-size-md; padding: 12px 20px; }

  &.is-round { border-radius: $radius-round; }
  &.is-circle { border-radius: 50%; padding: 8px; }
  &.is-disabled {
    opacity: 0.5; cursor: not-allowed;
    &:hover, &:active { opacity: 0.5; }
  }
  &.is-loading { cursor: wait; }

  &__loading {
    display: inline-flex;
    .lu-icon-loading {
      width: 14px; height: 14px;
      animation: lu-rotate 1s linear infinite;
    }
  }
}

@keyframes lu-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
