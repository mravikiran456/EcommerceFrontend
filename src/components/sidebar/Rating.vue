<template>
<div class="rating-container">
  <div class="category-heading-container">
        <h1 class="category-heading">Rating</h1>
    </div>
  <div class="q-pa-md">
    <q-option-group
      :options="options"
      type="radio"
      v-model="group"
    />
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref(null),

      options: [
        { label: '5 Stars', value: '5', color: 'green'  },
        { label: '4 Stars', value: '4', color: 'blue'  },
        { label: '3 Stars', value: '3', color: 'yellow' },
        { label: '2 Stars', value: '2', color: 'orange' },
        { label: '1 Stars', value: '1', color: 'red' },
      ]
    }
  }
}
</script>
