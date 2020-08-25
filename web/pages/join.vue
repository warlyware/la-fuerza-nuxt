<template>
  <div class="w-full">
    <Hero :title="$t('join.title')" x-axis-location="start" class="mb-8" />

    <div class="flex flex-wrap px-4 max-w-5xl m-auto">
      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-ml-8 mb-16">
        <img src="/images/portfolio.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-MissionGothicBlackItalic tracking-wide text-white">
            Regístrate
          </button>
        </div>
      </div>
      <div class="w-6 hidden md:flex md:justify-between">
        <div class="h-full border border-aqua w-0 mr-1"></div>
        <div class="h-full border border-pink w-0 mr-1"></div>
        <div class="h-full border border-orange w-0 mr-1"></div>
      </div>
      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-mr-8 mb-16">
        <img src="/images/webinar.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-2.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-MissionGothicBlackItalic tracking-wide text-white">
            Quiero Emoderar
          </button>
        </div>
      </div>

      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-ml-8 mb-16">
        <img src="/images/phone.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-MissionGothicBlackItalic tracking-wide text-white">
            Comparte
          </button>
        </div>
      </div>
      <div class="w-6 hidden md:flex md:justify-between">
        <div class="h-full border border-aqua w-0 mr-1"></div>
        <div class="h-full border border-pink w-0 mr-1"></div>
        <div class="h-full border border-orange w-0 mr-1"></div>
      </div>
      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-mr-8 mb-16">
        <img src="/images/hashtag.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-MissionGothicBlackItalic tracking-wide text-white">
            #FamLatinaFridays
          </button>
        </div>
      </div>

      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-ml-8 mb-16">
        <img src="/images/volunteer.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-MissionGothicBlackItalic tracking-wide text-white">
            Volunteer
          </button>
        </div>
      </div>
      <div class="w-6 hidden md:flex md:justify-between">
        <div class="h-full border border-aqua w-0 mr-1"></div>
        <div class="h-full border border-pink w-0 mr-1"></div>
        <div class="h-full border border-orange w-0 mr-1"></div>
      </div>
      <div class="w-full md:w-1/2 px-8 flex flex-col items-center md:-mr-8 mb-16">
        <img src="/images/heart.png" alt="" class="w-24 mb-4">
        <div class="w-full text-lg mb-4 text-center font-MissionGothicBold">{{ $t('join.block-1.body') }}</div>
        <div class="w-full flex justify-center">
          <button class="bg-pink rounded-lg p-2 py-1 text-2xl uppercase font-MissionGothicBlackItalic tracking-wide text-white">
            Donate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Hero from '~/components/blocks/Hero'

export default {
  components: { Hero }
}
</script>
