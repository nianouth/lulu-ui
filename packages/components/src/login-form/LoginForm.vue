<template>
  <div class="lu-login-form">
    <h2 class="lu-login-form__title">{{ title }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="lu-login-form__field">
        <label>{{ usernameLabel }}</label>
        <input v-model="form.username" type="text" :placeholder="usernamePlaceholder" required />
      </div>
      <div class="lu-login-form__field">
        <label>{{ passwordLabel }}</label>
        <input v-model="form.password" type="password" :placeholder="passwordPlaceholder" required />
      </div>
      <button type="submit" class="lu-login-form__submit" :disabled="loading">
        <span v-if="loading" class="lu-login-form__spinner" />
        {{ loading ? '登录中...' : submitText }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'LuLoginForm',
  props: {
    title: { type: String, default: '用户登录' },
    usernameLabel: { type: String, default: '用户名' },
    passwordLabel: { type: String, default: '密码' },
    usernamePlaceholder: { type: String, default: '请输入用户名' },
    passwordPlaceholder: { type: String, default: '请输入密码' },
    submitText: { type: String, default: '登录' },
  },
  emits: ['submit'],
  setup(_, { emit }) {
    const form = reactive({ username: '', password: '' })
    const loading = ref(false)

    const handleSubmit = () => {
      loading.value = true
      emit('submit', { ...form, done: () => { loading.value = false } })
    }

    return { form, loading, handleSubmit }
  },
})
</script>

<style lang="scss">
@use '../styles/variables' as *;

.lu-login-form {
  max-width: 380px;
  padding: 32px;
  background: $bg-color;
  border-radius: $radius-lg;
  box-shadow: $shadow-lg;

  &__title {
    font-size: 22px; font-weight: 700; color: $text-primary;
    text-align: center; margin: 0 0 24px;
  }

  &__field {
    margin-bottom: 16px;
    label { display: block; font-size: $font-size-sm; font-weight: 500; color: $text-regular; margin-bottom: 6px; }
    input {
      width: 100%; padding: 10px 12px; border: 1px solid $border-color;
      border-radius: $radius; font-size: $font-size; color: $text-primary;
      outline: none; transition: $transition; box-sizing: border-box;
      &::placeholder { color: $text-placeholder; }
      &:focus { border-color: $primary; box-shadow: 0 0 0 3px rgba($primary, 0.1); }
    }
  }

  &__submit {
    width: 100%; padding: 10px; margin-top: 8px;
    background: $primary; color: #fff; border: none; border-radius: $radius;
    font-size: $font-size; font-weight: 500; cursor: pointer;
    transition: $transition; display: flex; align-items: center; justify-content: center; gap: 8px;
    &:hover { background: $primary-light; }
    &:disabled { opacity: 0.7; cursor: wait; }
  }

  &__spinner {
    width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff; border-radius: 50%;
    animation: lu-rotate 0.8s linear infinite;
  }
}
</style>
