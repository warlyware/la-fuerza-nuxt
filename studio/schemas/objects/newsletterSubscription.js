export default {
  name: 'newsletterSubscription',
  type: 'object',
  title: 'Newsletter Subscription',
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
      name: 'enText',
      type: 'bodyPortableText',
      title: 'Test [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esText',
      type: 'bodyPortableText',
      title: 'Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare: () => ({ title: 'Component: Newsletter Subscription' })
  }
}
