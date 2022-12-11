<script setup>
// Nuxt sucks so we have to do this bs

import { watchEffect, ref } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
})

const fileType = props.image.match(/\.[0-9a-z]+$/i)
const cleanPath = props.image.replace(fileType, '')
const pathArray = cleanPath.split('/')
const imagePath = pathArray[pathArray.length - 1]

const image = ref()

watchEffect(async () => {
  switch (fileType[0]) {
    case '.jpg':
      image.value = (
        await import(/* @vite-ignore */ `../assets/${imagePath}.jpg`)
      ).default
      break
    case '.jpeg':
      image.value = (
        await import(/* @vite-ignore */ `../assets/${imagePath}.jpeg`)
      ).default
      break
    case '.png':
      image.value = (
        await import(/* @vite-ignore */ `../assets/${imagePath}.png`)
      ).default
      break
    case '.svg':
      image.value = (
        await import(/* @vite-ignore */ `../assets/${imagePath}.svg`)
      ).default
      break
    case '.webp':
      image.value = (
        await import(/* @vite-ignore */ `../assets/${imagePath}.webp`)
      ).default
      break
    default:
      throw new Error(`Unsupported filetype: ${fileType}`)
  }
})
</script>

<template>
  <img :src="image" :alt="$attrs.alt" v-bind="$attrs" />
</template>
