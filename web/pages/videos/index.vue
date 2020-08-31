<template>
  <section class="pt-8 h-full w-full relative">
    <h1 class="text-5xl text-center italic">
      {{ title[locale] }}
    </h1>
    <template v-if="formattedPlaylists.length">
      <div v-for="{ playlist, title, description } in formattedPlaylists" :key="playlist.id"
      class="max-w-video-player m-auto mb-8 px-8">
        <h2 class="mb-0 uppercase text-4xl">
          {{title}}
        </h2>
        <p class="mb-8 font-bold">
          <BlockContent :blocks="description" />
        </p>
        <YoutubePlayer
        :raw-playlist="playlist" />
      </div>
    </template>
    <Loader v-else />
  </section>


</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import YoutubePlayer from '~/components/video/YoutubePlayer'
import Loader from '~/components/blocks/Loader'
import qs from 'query-string'
import groq from 'groq'
import sanityClient from '~/sanityClient'
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
    Loader,
    BlockContent,
    YoutubePlayer
  },
  data() {
    return {
      formattedPlaylists: []
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    loading() { return this.formattedPlaylists === 0 }
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
