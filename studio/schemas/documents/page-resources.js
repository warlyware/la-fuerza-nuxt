export default {
  name: 'page-resources',
  type: 'document',
  title: 'Page: Resources',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Resources' })
  }
}
