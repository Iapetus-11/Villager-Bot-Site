<script setup>
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { onMounted, onUnmounted, ref } from 'vue'

const scrollPosition = ref(0)

function onScroll(e) {
  scrollPosition.value = e.target.scrollTop / window.innerHeight
}

onMounted(() => window.addEventListener('scroll', onScroll, true))
onUnmounted(() => window.removeEventListener('scroll', onScroll, true))
</script>

<template>
  <div
    id="header"
    class="flex flex-row p-5 transition relative"
    :class="
      [
        'bg-transparent',
        'bg-gremerald bg-opacity-10',
        'bg-gremerald bg-opacity-30',
        'bg-gremerald bg-opacity-50',
        'bg-gremerald bg-opacity-70',
        'bg-gremerald bg-opacity-90',
        'bg-gremerald',
        'bg-emerald-900',
        'bg-emerald-800',
        'bg-emerald-700',
      ][Math.floor(scrollPosition / 0.02)] || 'bg-emerald-600 shadow-lg'
    "
  >
    <div
      class="transition-opacity"
      :class="{ 'opacity-0': scrollPosition <= 0.25 }"
    >
      <img
        src="~/assets/villager-bot.webp"
        alt="villager-bot"
        class="rounded-full w-10 absolute"
      />
    </div>

    <div class="mx-auto md:mx-0 md:ml-auto flex flex-row space-x-3 text-white">
      <HeaderNavIcon
        to="https://discord.gg/39DwwUV"
        target="_blank"
        :icon="faDiscord"
      />
      <HeaderNavIcon
        to="https://github.com/Iapetus-11/Villager-Bot"
        target="_blank"
        :icon="faGithub"
      />
    </div>
  </div>
</template>
