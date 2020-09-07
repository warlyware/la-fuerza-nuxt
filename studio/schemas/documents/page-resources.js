export default {
  name: 'page-resources',
  type: 'document',
  title: 'Page: Resources',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'bookSectionTitle',
      type: 'localeString',
      title: 'Book Section title',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'bookSectionDescription',
      type: 'localeString',
      title: 'Book Section description',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
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
      title: 'Tip Section title',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'tipSectionDescription',
      type: 'localeString',
      title: 'Tip Section description',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'tips',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'tip' }]
      }]
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Resources' })
  }
}
