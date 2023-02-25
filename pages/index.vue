<script setup>
import { faPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import FeatureSection from '../components/FeatureSection'
</script>

<template>
  <div class="flex flex-col items-center space-y-5 mt-[10vh]">
    <img
      src="/villager-bot.webp"
      alt="villager-bot"
      class="rounded-full w-2/3 md:w-1/3 lg:w-1/4"
    />

    <div class="flex flex-col items-center w-5/6">
      <LinkButton
        class="w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5"
        :icon="faPlus"
        href="https://discord.com/oauth2/authorize?client_id=639498607632056321&permissions=1074130126&scope=bot%20applications.commands"
        label="Invite Villager Bot"
      />
    </div>
  </div>

  <div
    class="flex flex-col gap-8 mt-[25vh] pb-24 md:pb-52 bg-gradient-to-b from-transparent to-emerald-900 text-white items-center"
  >
    <!-- Villager Bot feature summary -->
    <h2 v-motion-pop-visible class="font-semibold text-3xl text-center">
      What makes Villager Bot awesome?
    </h2>
    <div
      v-motion-pop-visible
      class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-emerald-600 rounded-xl shadow-lg lg:w-2/3 mx-4"
    >
      <FeatureSection title="Economy & Games" image="emerald.webp">
        Mining, trivia, fishing, farming, and collectible trading with other
        players!
      </FeatureSection>

      <FeatureSection
        title="Minecraft Utilities"
        image="code-helper-badge.webp"
      >
        Check the status of any Minecraft server and other useful
        Minecraft-related commands
      </FeatureSection>

      <FeatureSection title="Image Generation" image="grass-block.webp">
        Generate Minecraft pixel art from images, fake achievements, fake splash
        screens, and more!
      </FeatureSection>

      <FeatureSection title="Multiple Languages" image="minecraft-global.svg">
        No English? Multiple languages supported! (English, Español, Français,
        Português)
      </FeatureSection>
    </div>

    <!-- Donation links, about me, and other projects -->
    <div
      class="grid grid-cols-1 lg:grid-cols-3 space-y-16 lg:space-y-0 mt-[12.5vh] md:mx-16 lg:mx-36 xl:mx-52"
    >
      <div class="flex flex-col space-y-4 items-center">
        <!-- Donation links -->
        <h2 v-motion-pop-visible class="font-semibold text-3xl text-center">
          Support Villager Bot
        </h2>
        <div v-motion-pop-visible class="flex flex-row gap-4 items-center">
          <LazyLinkButton
            :icon="faPaypal"
            href="https://paypal.me/Iapetus011"
            label="PayPal"
          />
          <LazyLinkButton
            :icon="faCoffee"
            href="https://ko-fi.com/iapetus11"
            label="Ko-fi"
          />
        </div>

        <div class="py-4" />

        <!-- About me -->
        <h2
          v-motion-pop-visible
          class="font-semibold text-3xl text-center mt-20"
        >
          About the Developer
        </h2>
        <div v-motion-pop-visible class="items-center mx-4 md:mx-16 lg:mx-0">
          <p>
            Hey &#128075; I'm
            <a
              href="https://iapetus11.me/"
              target="_blank"
              class="text-emerald-400 hover:text-emerald-300"
            >
              Iapetus11 / Milo
            </a>
            and I started developing Villager Bot in 9th grade. This project has
            been incredibly helpful to me and I would've not been where I am
            today without it.
          </p>
        </div>
      </div>

      <!-- Other projects -->
      <div class="flex flex-col gap-4 md:col-span-2 items-center mx-4 md:mx-20">
        <h3 v-motion-pop-visible class="font-semibold text-3xl text-center">
          Other Projects
        </h3>
        <div class="flex flex-col gap-4">
          <LazyProjectCard
            title="Quake III Bot"
            image="quake3.webp"
            link="https://top.gg/bot/1031255985915961406"
          >
            A Discord bot with commands for managing your Quake III servers via
            remote console
          </LazyProjectCard>

          <LazyProjectCard
            title="minecraft.global"
            image="minecraft-global.svg"
            link="https://minecraft.global/"
          >
            A modern Minecraft server list with support for both Bedrock and
            Java edition and innovative features
          </LazyProjectCard>
        </div>
      </div>
    </div>
  </div>
</template>
