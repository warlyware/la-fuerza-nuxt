<template>
  <div class="w-full">
    <Hero :title="$t('collaborators.title')" x-axis-location="start" bg-color="aqua" class="mb-8" />
    <div class="w-full flex flex-wrap mb-8">
      <div class="w-full md:w-1/2 my-1/2 md:pr-2">
        <youtube player-width="100%" player-height="100%"
        :player-vars="playerVars"
        class="video-responsive flex-grow"
        video-id="EBRsKQkuZN8" />
      </div>
      <div class="w-full md:w-1/2 text-white leading-tight md:pl-2">
        <div class="text-2xl font-MissionGothicBold p-8 bg-blue h-full flex justify-center items-center">
          <p>
            We collaborate with organizations and institutions serving Hispanic families of children 0-7
            years of age, to help support parents as their child's first and most important teachers.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full bg-blue p-8 mb-8">
      <p class="w-full text-center text-2xl text-white font-MissionGothicBold">
        Learn more about our
        <nuxt-link to="/talleres" class="text-pink italic">
          workshops for parents</nuxt-link>.
      </p>
    </div>
    <div class="max-w-3xl m-auto flex flex-wrap px-8 md:px-16 text-xl uppercase mb-12 tracking-wide">
      <div class="p-4 w-full md:w-1/2">
        <div class="border rounded-lg w-full flex justify-center items-center h-auto p-16 font-MissionGothicBlackItalic shadow-black">
          Text Why
        </div>
      </div>
      <div class="p-4 w-full md:w-1/2">
        <div class="border rounded-lg w-full flex justify-center items-center h-auto p-16 font-MissionGothicBlackItalic shadow-black">
          Text What
        </div>
      </div>
    </div>
    <div class="max-w-5xl m-auto mb-12">
      <h2 class="text-5xl uppercase font-MissionGothicBlackItalic text-center mb-0">
        How to Collaborate
      </h2>
      <div class="flex flex-wrap md:flex-no-wrap w-full">
        <div class="h-48 w-48 flex items-center justify-center border border-pink rounded-full shadow-pink-side flex-shrink-0 mx-8">
          <h3 class="text-4xl mb-0 uppercase font-MissionGothicBlack">Host</h3>
        </div>
        <p class="text-pink text-lg font-MissionGothicBold leading-5 flex items-center">
          Mauris ullamcorper porttitor pretium. Curabitur quis ex varius, auctor lorem vel, cursus velit.
          Ut eget nunc a nibh sollicitudin luctus ac eget ante. Vivamus nec pharetra dui, et condimentum sapien.
          Etiam eu pretium metus. Vivamus pellentesque ex nec lacus euismod, sit amet ultrices ante efficitur.
        </p>
      </div>
      <div class="flex flex-wrap md:flex-no-wrap w-full">
        <p class="text-aqua text-lg font-MissionGothicBold leading-5 flex items-center text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum auctor quam,
          nec ornare lorem maximus non. Quisque aliquet enim sed molestie rutrum. Duis id enim quis enim
          condimentum lacinia. Quisque imperdiet sed erat vitae lobortis. Aenean tempus est nec
          consectetur condimentum.
        </p>
        <div class="h-48 w-48 flex items-center justify-center border border-aqua rounded-full shadow-aqua-side flex-shrink-0 mx-8">
          <h3 class="text-4xl mb-0 uppercase font-MissionGothicBlack">Sponsor</h3>
        </div>
      </div>
    </div>
    <div class="max-w-3xl m-auto flex flex-wrap mb-12">
      <div class="w-full md:w-1/3 bg-blue flex items-center rounded-lg uppercase tracking-wider">
        <h2 class="font-MissionGothicBlackItalic text-white text-4xl mb-0 leading-tight p-4">
          Free Membership
        </h2>
      </div>
      <div class="w-full md:w-2/3 border border-blue rounded p-8">
        <p class="p-4 font-MissionGothicBold text-lg text-center mb-0">
          <span class="font-MissionGothicBlackItalic">Subscribe</span> to our membersip to become a member
          of our community and Practice. It includes
          <span class="font-MissionGothicBlackItalic">
            montly access to new content, family engagment lessons, and invitations for our upcoming worshop. It's free!
          </span>
        </p>
        <div class="w-full flex justify-center mb-8">
          <button class="p-2 py-1 font-MissionGothicBlackItalic text-3xl text-white bg-pink rounded-lg tracking-wide uppercase">
            Become a Member
          </button>
        </div>
      </div>
    </div>
    <div class="max-w-5xl flex flex-wrap m-auto mb-12">
      <div class="w-full md:w-1/2 p-4 px-8 bg-pink text-white text-center leading-5">
        <p class="mb-4">
          Child care providers can be part of our Coaching Program.
          We'll provide coaching to implement our family engagment materials with parents
          in <span class="font-MissionGothicBlack font-bold">your</span> community.
        </p>
        <p class="mb-4">
          Recieve free access to the workshop toolkit. Limited scolarships available.
        </p>
        <button class="p-2 font-MissionGothicBlackItalic text-2xl text-white bg-aqua rounded-lg tracking-wide uppercase text-shadow-pink">
          Enroll now
        </button>
      </div>
      <div class="w-full md:w-1/2 p-4 px-8 bg-aqua text-blue text-center leading-relaxed flex flex-col justify-center">
        <p class="font-MissionGothicBold">Family Engagement Toolkits include:</p>
        <p class="font-MissionGothicBold">- Video toolkits</p>
        <p class="font-MissionGothicBold">- Facilitation guidance</p>
        <p class="font-MissionGothicBold">- Access to resources to share with families</p>
      </div>
    </div>

    <div class="w-full bg-blue p-8 mb-8 font-MissionGothicBlack text-white text-center text-2xl tracking-wide">
      Join leaders in your city to learn more about how our programs and educational media can benefit your community:
    </div>
  </div>
</template>

<script>
import Hero from '~/components/blocks/Hero'

export default {
  components: { Hero }
}
</script>

<style scoped>
.shadow-black {
  -webkit-box-shadow: 8px 8px 0px -1px rgba(0,0,0,1);
  -moz-box-shadow: 8px 8px 0px -1px rgba(0,0,0,1);
  box-shadow: 8px 8px 0px -1px rgba(0,0,0,1);
}

.shadow-pink-side {
  -webkit-box-shadow: 14px 0px 0px -1px #ea3cad;
  -moz-box-shadow: 14px 0px 0px -1px #ea3cad;
  box-shadow: 14px 0px 0px -1px #ea3cad;
}
.shadow-aqua-side {
  -webkit-box-shadow: 14px 0px 0px -1px #1bcfc9;
  -moz-box-shadow: 14px 0px 0px -1px #1bcfc9;
  box-shadow: 14px 0px 0px -1px #1bcfc9;
}
</style>
