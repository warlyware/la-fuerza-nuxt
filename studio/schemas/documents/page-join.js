export default {
  name: 'page-join',
  type: 'document',
  title: 'Page: Join Us',
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
      name: 'joinBlocks',
      type: 'array',
      of: [{ type: 'joinBlock' }]
    },
    {
      name: 'newsletterSubscription',
      type: 'newsletterSubscription',
      title: 'Newsletter Subscription'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Join Us' })
  }
}
