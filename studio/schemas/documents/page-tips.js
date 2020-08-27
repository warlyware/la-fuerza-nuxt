export default {
  name: 'page-tips',
  type: 'document',
  title: 'Page: Tips',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Tips' })
  }
}
