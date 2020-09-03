<template>
  <section class="pt-8">
    <h1 class="text-5xl text-center italic">
      {{ title[locale] }}
    </h1>
    <div v-if="shareMenu"
    class="h-screen fixed flex items-center top-0 left-0 -mt-16 z-10 pointer-events-none">
      <ShareMenu class="pointer-events-auto" :share-menu="shareMenu" />
    </div>
    <template v-if="formattedPlaylists.length">
      <div v-for="{ playlist, title, description } in formattedPlaylists" :key="playlist.id"
      class="max-w-video-player m-auto mb-8 px-8 text-blue">
        <h2 class="mb-0 text-4xl">
          {{title}}
        </h2>
        <p class="mb-8 font-bold">
          <BlockContent :blocks="description" />
        </p>
        <YoutubePlayer
        :raw-playlist="playlist" />
      </div>
    </template>
  </section>


</template>

<script>
import ShareMenu from '~/components/ShareMenu'
import BlockContent from 'sanity-blocks-vue-component'
import qs from 'query-string'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import YoutubePlayer from '~/components/video/YoutubePlayer'
import { getYtPlaylist } from '~/lib/api'

const query = groq`
  *[_id == "page-videos"][0] {
    playlists[]->{
      ...
    },
    ...
  }
`

export default {
  components: {
    BlockContent,
    ShareMenu,
    YoutubePlayer
  },
  data() {
    return {
      formattedPlaylists: []
    }
  },
  computed: {
    locale() { return this.$i18n.locale }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  watch: {
    locale() {
      this.getPlaylists()
    }
  },
  async mounted() {
    this.getPlaylists()
  },
   methods: {
     getPlaylists() {
      this.formattedPlaylists = []
      this.playlists.forEach(async i => {
        const url = i[`${this.locale}PlaylistUrl`]
        const queryString = url.split('?')[1]
        const { list: playlistId } = qs.parse(queryString)
        const { playlist } = await getYtPlaylist(playlistId)
        this.formattedPlaylists.push({
          playlist,
          title: i.title[this.locale],
          description: i[`${this.locale}Description`]
        })
      })
     }
  },
}
</script>

<style>
.max-w-video-player {
  max-width: 1200px;
}
</style>
