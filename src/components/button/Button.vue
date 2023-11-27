<template>
  <button
    class="button"
    :class="[
      props.size,
      props.color,
      {
        'is-responsive': props.responsive,
        'is-fullwidth': props.expanded,
        'is-rounded': rounded,
        'is-loading': loading,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-focused': focused,
        'is-active': active,
        'is-hovered': hovered,
        'is-selected': selected
        }
    ]"
    :disabled="props.disabled"
  >
    <span v-if="iconLeft" class="icon" :class="[props.size]">
      <i class="fab fa-github"></i>
    </span>
    <slot>
      <span v-if="props.label">{{ props.label }}</span>
    </slot>
    <span v-if="iconRight" class="icon" :class="[props.size]">
      <i class="fab fa-github"></i>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';

const props = defineProps({
  label: {
    type: String as PropType<String | undefined>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  focused: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  hovered: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  /** 
   * If you want different button sizes for each breakpoint, you can use Bulma's responsive buttons
  */
  responsive: {
    type: Boolean,
    default: false,
  },
  /**
   * The button comes in 4 different sizes: small, normal, medium, large.
   * While the default size is the normal one, the is-normal modifier exists in case you need to reset the button to its normal size.
   * @values small, normal, medium, large
   * @version 1.0.5
   */
  size: {
    type: String as PropType<'is-small' | 'is-normal' | 'is-medium' | 'is-large'>,
    default: 'is-normal',
  },
  color: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  iconRight: String,
  iconLeft: String,
  type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
      validator: (value: string) => {
          return [
            'button',
            'submit',
            'reset'
          ].includes(value)
      }
  },
  tag: {
      type: String as PropType<'a' | 'button' | 'input' | 'router-link' | 'nuxt-link' | 'n-link' | 'RouterLink' | 'NuxtLink' | 'NLink'>,
      default: 'button',
      validator: (value: string) => {
          return [
            'a',
            'button',
            'input',
            'router-link',
            'nuxt-link',
            'n-link',
            'RouterLink',
            'NuxtLink',
            'NLink'
          ].includes(value)
      }
  }
});
</script>
