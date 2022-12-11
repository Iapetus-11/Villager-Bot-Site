<script setup>
defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
})
</script>

<template>
  <a
    v-motion-pop-visible
    class="flex flex-row p-3 bg-emerald-600 hover:bg-emerald-500 transition rounded-xl shadow-lg space-x-3"
    :href="link"
    target="_blank"
  >
    <ShImage :image="image" :alt="title" class="h-20 rounded-lg" />
    <div class="flex flex-col text-left">
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <p><slot /></p>
    </div>
  </a>
</template>
