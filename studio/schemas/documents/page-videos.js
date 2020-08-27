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
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Videos' })
  }
}
