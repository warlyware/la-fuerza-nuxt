import localize from '~/lib/localize'

export const state = () => ({
  video: {},
  navIsOpen: false
})

export const getters = {
  lang: state => [state.i18n ? state.i18n.locale : 'de', 'en'],
  video: (state, getters) => localize(state.video, getters.lang),
  navIsOpen(state) {
    return state.navIsOpen
  }
}

export const mutations = {
  toggleNav(state) {
    state.navIsOpen = !state.navIsOpen
  }
}
