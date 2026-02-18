<template>
  <div class="lu-user-card">
    <div class="lu-user-card__avatar" :style="{ background: avatarColor }">
      <img v-if="avatar" :src="avatar" :alt="name" />
      <span v-else>{{ initials }}</span>
    </div>
    <div class="lu-user-card__info">
      <h4 class="lu-user-card__name">{{ name }}</h4>
      <p v-if="description" class="lu-user-card__desc">{{ description }}</p>
    </div>
    <div v-if="$slots.actions" class="lu-user-card__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'LuUserCard',
  props: {
    name: { type: String, required: true },
    avatar: String,
    description: String,
  },
  setup(props) {
    const initials = computed(() => props.name.slice(0, 2).toUpperCase())
    const colors = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6', '#ec4899']
    const avatarColor = computed(() => {
      let hash = 0
      for (const c of props.name) hash = c.charCodeAt(0) + ((hash << 5) - hash)
      return colors[Math.abs(hash) % colors.length]
    })
    return { initials, avatarColor }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-user-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: $bg-color;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  transition: $transition;

  &:hover { box-shadow: $shadow; }

  &__avatar {
    flex-shrink: 0;
    width: 44px; height: 44px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: $font-size-sm; font-weight: 600;
    overflow: hidden;

    img { width: 100%; height: 100%; object-fit: cover; }
  }

  &__info { flex: 1; min-width: 0; }
  &__name { margin: 0; font-size: $font-size; font-weight: 600; color: $text-primary; }
  &__desc { margin: 2px 0 0; font-size: $font-size-sm; color: $text-secondary; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  &__actions { flex-shrink: 0; }
}
</style>
