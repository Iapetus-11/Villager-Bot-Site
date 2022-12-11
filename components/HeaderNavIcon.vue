<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  icon: { type: Object, required: true },
  to: { type: [String, Object], required: true },
})
</script>

<template>
  <NuxtLink :to="to" v-bind="$attrs">
    <div class="space-x-1 p-2 rounded-full">
      <span class="text-center text-gray-300 hover:text-white transition">
        <FontAwesomeIcon :icon="icon" size="lg" fixed-width />
      </span>
    </div>
  </NuxtLink>
</template>
