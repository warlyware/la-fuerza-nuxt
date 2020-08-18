<template>
  <div class="pt-8 max-w-5xl mx-auto md:pt-32 mb-8 content px-8 md:px-0">
    <h1 class="text-center">
      {{ $t('join.title') }}
    </h1>

    <h2 class="text-center">Take Action</h2>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 px-8">
        <h3 class="text-2xl text-center">{{ $t('join.block-1.title') }}</h3>
        <div class="w-full text-2xl">{{ $t('join.block-1.body') }}</div>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <h3 class="text-2xl text-center">{{ $t('join.block-2.title') }}</h3>
        <div>{{ $t('join.block-2.body') }}</div>
      </div>
    </div>
  </div>
</template>
