export default {
  name: 'resourceDownload',
  title: 'Resource Download',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Resource Name',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'resourceLink',
      type: 'string',
      title: 'Resource Link',
      description: 'Link to PDF. Also supports using a Google Doc share link, if the share link is public to the internet',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare: ({ title }) => ({ title: title.en })
  }
}
