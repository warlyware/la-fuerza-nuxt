export default {
  name: 'page-videos',
  type: 'document',
  title: 'Page: Videos',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'playlists',
      type: 'array',
      description: 'Playlists to display on the Video page',
      of: [{
        type: 'reference',
        to: [{ type: 'playlist' }]
      }]
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Videos' })
  }
}
