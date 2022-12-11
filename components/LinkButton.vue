<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  icon: { type: Object, required: true },
  href: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <a
    class="flex flex-row p-3 rounded-md shadow-lg space-x-3 justify-center items-center cursor-pointer bg-emerald-600 hover:bg-emerald-500 transition text-center font-semibold text-white"
    :href="href"
    target="_blank"
    v-bind="$attrs"
  >
    <FontAwesomeIcon :icon="icon" size="lg" fixed-width />
    <span>{{ label }}</span>
  </a>
</template>
