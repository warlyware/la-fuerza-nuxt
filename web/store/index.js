import groq from 'groq'

import localize from '~/lib/localize'
import sanityClient from '~/sanityClient'

export const state = () => ({
  video: {},
  navIsOpen: false
})

export const getters = {
  lang: state => [state.i18n ? state.i18n.locale : 'es', 'en'],
  video: (state, getters) => localize(state.video, getters.lang),
  navIsOpen(state) {
    return state.navIsOpen
  }
}

export const mutations = {
  toggleNav(state) {
    state.navIsOpen = !state.navIsOpen
  },
  setVideo(state, video) {
    state.video = video
  }
}

export const actions = {
  async getVideo({ commit }, params) {
    const query = groq`
      *[_type == "video" && slug.current == $slug][0] {
        "id": _id, url, name, descriptionSpanish, descriptionEnglish, shortDescription,
        "relatedVideos": relatedVideos[].video->{
          ...
        }
      }
    `
    const videoRaw = await sanityClient.fetch(query, params)

    commit('setVideo', videoRaw)
  }
}
