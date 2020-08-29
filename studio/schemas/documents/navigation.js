export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'slotOne',
      type: 'localeString',
      title: 'Slot 1'
    },
    {
      name: 'slotTwo',
      type: 'localeString',
      title: 'Slot 2'
    },
    {
      name: 'slotThree',
      type: 'localeString',
      title: 'Slot 3'
    },
    {
      name: 'slotFour',
      type: 'localeString',
      title: 'Slot 4'
    },
    {
      name: 'slotFive',
      type: 'localeString',
      title: 'Slot 5'
    },
    {
      name: 'slotSix',
      type: 'localeString',
      title: 'Slot 6'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Navigation' })
  }
}
