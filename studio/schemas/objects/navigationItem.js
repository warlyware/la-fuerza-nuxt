export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'localeString',
      title: 'Button Text'
    },
    {
      name: 'internalLink',
      type: 'string',
      title: 'Internal Page Link',
      options: {
        list: [
          { value: '/', title: 'Home' },
          { value: '/videos', title: 'Videos' },
          { value: '/workshops', title: 'Workshops' },
          { value: '/resources', title: 'Resources' },
          { value: '/resources/books', title: 'Resources: Books' },
          { value: '/resources/tips', title: 'Resources: Tips' },
          { value: '/collaborators', title: 'Collaborators' },
          { value: '/join', title: 'Join' },
          { value: '/contact', title: 'Contact' },
          { value: '/about', title: 'About' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'text'
    },
    prepare: ({ title }) => ({ title: title.en })
  }
}
