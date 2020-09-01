export default {
  name: 'newsletterSubscription',
  type: 'object',
  title: 'Newsletter Subscription',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'enText',
      type: 'bodyPortableText',
      title: 'Test [English]'
    },
    {
      name: 'esText',
      type: 'bodyPortableText',
      title: 'Text [Spanish]'
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Component: Newsletter Subscription' })
  }
}
