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
      validation: Rule => Rule.custom(({ en, es }) => {
        if (en && en.length && es && es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enBannerText',
      type: 'bodyPortableText',
      title: 'Banner Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBannerText',
      type: 'bodyPortableText',
      title: 'Banner Text [Spanish]',
      validation: Rule => Rule.required()
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
