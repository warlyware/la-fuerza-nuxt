<template>
  <div class="w-full">
    <Hero :title="$t('about.title')" x-axis-location="start" class="mb-8" />
    <div class="max-w-4xl mx-auto justify-between p-4 mb-4">
      <p>
        Aliquam sit amet diam est. Ut id dolor sit amet enim malesuada aliquam vitae eu ipsum. In nec tincidunt sapien. Proin in lacus ut sem rhoncus malesuada. Donec eget iaculis nisi, ac laoreet est. Fusce ultrices, risus eleifend porttitor euismod, orci urna sodales mi, eget auctor orci neque ut odio. Suspendisse pulvinar eget massa nec suscipit. Donec porta tristique laoreet. Phasellus ex dui, maximus vitae nunc non, condimentum convallis ipsum. Sed sed iaculis nunc. Nullam et sollicitudin est, posuere iaculis magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Aenean ut neque ac massa mollis tincidunt. Donec nec urna pellentesque, consequat risus malesuada, eleifend lectus. Etiam ullamcorper erat id ante blandit vulputate. Nulla et arcu at turpis luctus aliquam a id lacus. Suspendisse facilisis, massa sit amet placerat placerat, elit magna accumsan lorem, aliquam mattis ex orci vitae leo. Etiam consectetur tempor dignissim. Nunc pulvinar tellus id ipsum eleifend, a molestie odio pulvinar. In iaculis ligula ut aliquet consectetur. Integer gravida faucibus tortor ac placerat. Fusce sed velit eu justo porta venenatis. Vestibulum luctus gravida mauris. Proin et nisi quis nibh posuere porta. Ut libero mauris, suscipit vel nulla at, convallis imperdiet nisi. Aenean sollicitudin quam et nunc malesuada cursus.
      </p>
    </div>
    <OurAllies class="mb-16" />

    <div class="max-w-4xl mx-auto w-full flex flex-wrap mb-8">
      <h2 class="font-MissionGothicBlackItalic uppercase text-4xl w-full mb-0 leading-tight">
        Un Poco Más...
      </h2>
      <div class="w-2/3 h-64 bg-blue text-white flex justify-center items-center">
        <div>Photo Gallery</div>
      </div>
      <div class="w-1/3 h-64 text-blue border border-blue flex flex-col items-center p-8 md:p-12">
        <div class="text-4xl font-MissionGothicBlackItalic leading-tight text-center uppercase mb-2">
          Sé parte de nuestros aliados
        </div>
        <div>
          <button class="bg-aqua p-2 py-0 rounded text-white text-shadow-pink">
            Conce Màs
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/blocks/Hero'
import OurAllies from '~/components/about/OurAllies'

export default {
  components: { Hero, OurAllies }
}
</script>
