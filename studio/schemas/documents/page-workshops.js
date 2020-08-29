export default {
  name: 'page-workshops',
  type: 'document',
  title: 'Page: Workshops',
  __experimental_actions: ['update', /* 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Workshops' })
  }
}
