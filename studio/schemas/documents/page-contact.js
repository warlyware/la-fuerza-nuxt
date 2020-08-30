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
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero'
    },
    {
      name: 'contacts',
      type: 'array',
      of: [{ type: 'contact' }]
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Contact' })
  }
}
