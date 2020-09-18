export default {
  name: 'page-tips',
  type: 'document',
  title: 'Page: Tips',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enBannerText',
      type: 'bodyPortableText',
      title: 'Banner Text [English]',
      description: 'Leave blank to hide banner.'
    },
    {
      name: 'esBannerText',
      type: 'bodyPortableText',
      title: 'Banner Text [Spanish]',
      description: 'Leave blank to hide banner.'
    },
    {
      name: 'shareMenu',
      type: 'shareMenu',
      title: 'Social Media Share Menu'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Tips' })
  }
}
