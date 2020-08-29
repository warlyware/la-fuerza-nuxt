export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      title: 'Full Height',
      name: 'fullHeight',
      type: 'boolean',
      description: 'Select if Hero should be full height or banner height.',
      default: true
    },
    {
      title: 'Hero Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
