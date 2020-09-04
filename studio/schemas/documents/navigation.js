export default {
  name: 'navigation',
  title: 'Navigation',
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
    }
  ],
  preview: {
    prepare: () => ({ title: 'Component: Navigation' })
  }
}
