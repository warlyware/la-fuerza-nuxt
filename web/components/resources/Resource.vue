<template>
  <div class="w-full lg:w-1/2 flex cursor-pointer" @click="$router.push('/resources/books/title-of-book')">
    <img class="p-2 w-32"
    src="//placehold.it/300" alt="">
    <div class="flex flex-col h-full p-2 justify-around">
      <h2 class="text-2xl font-MissionGothicBold mb-0 leading-4">
        Title of Book
      </h2>
      <div class="flex flex-col text-xs leading-3">
        <span>
          AGE
        </span>
        <span>
          CATEGORY
        </span>
        <span>
          SPECIAL TIP
        </span>
      </div>
      <div class="w-full">
        <button class="bg-aqua text-white text-shadow-pink px-2 py-0 rounded uppercase text-sm font-MissionGothicItalic">
          Leer Más
        </button>
      </div>
    </div>
  </div>
</template>
