export default {
  name: 'page-contact',
  type: 'document',
  title: 'Page: Contact',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.custom(({ en, es }) => {
        if (en && en.length && es && es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
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
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'newsletterSubscription',
      type: 'newsletterSubscription',
      title: 'Newsletter Subscription',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Contact' })
  }
}
