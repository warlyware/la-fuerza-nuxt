export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'mainNavigation',
      type: 'array',
      of: [{ type: 'navigationItem' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'footerNavigation',
      type: 'array',
      of: [{ type: 'navigationItem' }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Social Media Link: Facebook',
      name: 'facebookUrl',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Social Media Link: Instagram',
      name: 'instagramUrl',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Social Media Link: Twitter',
      name: 'twitterUrl',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Social Media Link: Youtube',
      name: 'youtubeUrl',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare: () => ({ title: 'Component: Navigation' })
  }
}
