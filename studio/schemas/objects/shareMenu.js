export default {
  name: 'shareMenu',
  title: 'Share Menu',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'description',
      type: 'localeString',
      title: 'Description'
    },
    {
      name: 'quote',
      type: 'localeString',
      title: 'Quote'
    },
    {
      title: 'Hashtags [English]',
      name: 'enHashtags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.unique()
    },
    {
      title: 'Hashtags [Spanish]',
      name: 'esHashtags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.unique()
    }
  ],
  preview: {
    preview: {
      prepare: () => ({ title: 'Share Menu' })
    }
  }
}
