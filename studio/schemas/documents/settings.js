export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'mainNavigation',
      type: 'array',
      of: [{ type: 'navigationItem' }]
    },
    {
      name: 'footerNavigation',
      type: 'array',
      of: [{ type: 'navigationItem' }]
    },
    {
      title: 'Social Media Link: Facebook',
      name: 'facebookUrl',
      type: 'string'
    },
    {
      title: 'Social Media Link: Instagram',
      name: 'instagramUrl',
      type: 'string'
    },
    {
      title: 'Social Media Link: Twitter',
      name: 'twitterUrl',
      type: 'string'
    },
    {
      title: 'Social Media Link: Youtube',
      name: 'youtubeUrl',
      type: 'string'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Component: Navigation' })
  }
}
