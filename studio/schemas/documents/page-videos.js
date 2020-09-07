export default {
  name: 'page-videos',
  type: 'document',
  title: 'Page: Videos',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.custom(({ en, es }) => {
        if (en && en.length && es && es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'playlists',
      type: 'array',
      description: 'Playlists to display on the Video page',
      of: [{
        type: 'reference',
        to: [{ type: 'playlist' }]
      }]
    },
    {
      name: 'shareMenu',
      type: 'shareMenu',
      title: 'Social Media Share Menu'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Videos' })
  }
}
