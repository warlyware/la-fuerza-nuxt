export default {
  name: 'page-resources',
  type: 'document',
  title: 'Page: Resources',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'bookSectionTitle',
      type: 'localeString',
      title: 'Book Section title'
    },
    {
      name: 'bookSectionDescription',
      type: 'localeString',
      title: 'Book Section description'
    },
    {
      name: 'books',
      type: 'array',
      description: 'Books to display',
      of: [{
        type: 'reference',
        to: [{ type: 'book' }]
      }]
    },
    {
      name: 'tipSectionTitle',
      type: 'localeString',
      title: 'Tip Section title'
    },
    {
      name: 'tipSectionDescription',
      type: 'localeString',
      title: 'Tip Section description'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Resources' })
  }
}
