<template>

  <a :href="href" @click.prevent="onClick">
    <slot></slot>
  </a>

</template>

<script>

import SmoothScroll from 'smoothscroll-polyfill';

export default {

  name: 'ScrollLink',

  props: {
    href: {
      type: String,
      required: true
    },
    behavior: {
      default: 'auto',
      validator: (prop) => ['auto', 'smooth'].includes(prop)
    },
    block: {
      default: 'start',
      validator: (prop) => ['start', 'center', 'end', 'nearest'].includes(prop)
    },
    inline: {
      default: 'nearest',
      validator: (prop) => ['start', 'center', 'end', 'nearest'].includes(prop)
    }
  },

  methods: {

    onClick()
    {
      document.querySelector(this.href).scrollIntoView({
        behavior: this.behavior,
        block: this.block,
        inline: this.inline
      });
    }

  },

  mounted()
  {
    SmoothScroll.polyfill();
  }
}

</script>
