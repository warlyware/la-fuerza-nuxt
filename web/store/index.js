export const state = () => ({
  eventInformation: {
    title: 'This is the test title'
  },
  program: {},
  navIsOpen: false
})

export const getters = {
  navIsOpen(state) {
    return state.navIsOpen
  },
  eventInformation(state) {
    return state.eventInformation
  },
  getProgram(state) {
    return state.program
  }
}

export const mutations = {
  toggleNav(state) {
    state.navIsOpen = !state.navIsOpen
  },
  setEventInformation(state, info) {
    state.eventInformation = info
  },
  setProgram(state, program) {
    state.program = program
  }
}
