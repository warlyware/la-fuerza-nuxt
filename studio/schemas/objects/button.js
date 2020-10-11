export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'localeString',
      title: 'Button Text',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
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
          { value: '/resources/read-alouds', title: 'Resources: Read-Alouds' },
          { value: '/resources/tips', title: 'Resources: Tips' },
          { value: '/resources/partners', title: 'Resources: Partners' },
          { value: '/partners', title: 'Partners' },
          { value: '/join', title: 'Join' },
          { value: '/contact', title: 'Contact' },
          { value: '/about', title: 'About' }
        ]
      }
    },
    {
      name: 'externalLink',
      type: 'string',
      title: 'External Link',
      description: 'Ignored if an Internal Page Link is selected'
    },
    {
      name: 'newWindow',
      type: 'boolean',
      title: 'Open in New Window?',
      description: 'Ignored if an Internal Page Link is selected'
    }
  ],
  preview: {
    select: {
      title: 'text'
    },
    prepare: ({ title }) => ({ title: title.en })
  }
}
