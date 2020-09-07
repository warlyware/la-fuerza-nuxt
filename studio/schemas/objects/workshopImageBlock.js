export default {
  name: 'workshopImageBlock',
  title: 'Workshop Image Block',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Not displayed on the page.',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
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
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'enText',
      type: 'bodyPortableText',
      title: 'Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esText',
      type: 'bodyPortableText',
      title: 'Text [Spanish]',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
