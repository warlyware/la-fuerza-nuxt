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
    },
    {
      title: 'Background Color',
      name: 'bgColor',
      type: 'string',
      description: 'Color to use if no image is selected.',
      options: {
        list: [
          { value: 'pink', title: 'Pink' },
          { value: 'blue', title: 'Blue' },
          { value: 'aqua', title: 'Aqua' }
        ]
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
