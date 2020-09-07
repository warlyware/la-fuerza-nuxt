export default {
  name: 'joinBlock',
  title: 'Join Block',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: '(Not displayed)',
      validation: Rule => Rule.required()
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
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
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
