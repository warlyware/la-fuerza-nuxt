export default {
  name: 'workshopImageBlock',
  title: 'Workshop Image Block',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Not displayed on the page.'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Image Border Color',
      name: 'borderColor',
      type: 'string',
      options: {
        list: [
          { value: 'aqua', title: 'Aqua' },
          { value: 'blue', title: 'Blue' },
          { value: 'pink', title: 'Pink' },
          { value: 'orange', title: 'Orange' }
        ]
      }
    },
    {
      name: 'enText',
      type: 'bodyPortableText',
      title: 'Text [English]'
    },
    {
      name: 'esText',
      type: 'bodyPortableText',
      title: 'Text [Spanish]'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
