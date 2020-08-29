export default {
  name: 'page-tips',
  type: 'document',
  title: 'Page: Tips',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'enBannerText',
      type: 'bodyPortableText',
      title: 'Banner Text [English]'
    },
    {
      name: 'esBannerText',
      type: 'bodyPortableText',
      title: 'Banner Text [Spanish]'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Tips' })
  }
}
