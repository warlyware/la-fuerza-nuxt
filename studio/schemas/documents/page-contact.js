export default {
  name: 'page-contact',
  type: 'document',
  title: 'Page: Contact',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Contact' })
  }
}
