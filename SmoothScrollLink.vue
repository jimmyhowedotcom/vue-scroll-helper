<template>

  <a :href="href" @click.prevent="onClick">
    <slot></slot>
  </a>

</template>

<script>

import Scrollable from './Scrollable';

export default Scrollable.extend({

  name: 'ScrollLink',

  props: {
    href: {
      type: String,
      required: true
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

  data()
  {
    return {
      behavior: 'smooth'
    }
  }
})

</script>
