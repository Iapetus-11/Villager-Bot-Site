<script setup>
defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
})
</script>

<template>
  <div class="flex flex-row items-center space-x-4">
    <ShImage :image="image" :alt="title" class="w-1/6" />

    <div class="flex flex-col items-center space-y-1">
      <h3 class="text-2xl font-semibold text-center">{{ title }}</h3>
      <span><slot /></span>
    </div>
  </div>
</template>
