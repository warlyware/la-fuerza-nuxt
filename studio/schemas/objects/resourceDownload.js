export default {
  name: 'resourceDownload',
  title: 'Resource Download',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resource Name'
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
      validation: Rule => Rule.required()
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
      name: 'name',
      linkText: 'linkText'
    },
    prepare: ({ name, linkText }) => ({ title: name || linkText })
  }
}
