export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'localeString',
      title: 'Button Text'
    },
    {
      name: 'link',
      type: 'string',
      title: 'Button Link'
    },
    {
      name: 'newWindow',
      type: 'boolean',
      title: 'Open in New Window?'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
