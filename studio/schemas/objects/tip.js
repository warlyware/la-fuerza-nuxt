export default {
  name: 'tip',
  title: 'Tip',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'caption',
      type: 'localeString',
      title: 'Caption [English]'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
