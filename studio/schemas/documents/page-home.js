export default {
  name: 'page-collaborators',
  type: 'document',
  title: 'Page: Home',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Home' })
  }
}
