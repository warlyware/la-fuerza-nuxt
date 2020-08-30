export default {
  name: 'joinBlock',
  title: 'Join Block',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: '(Not displayed)'
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image'
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
    },
    {
      name: 'button',
      type: 'button',
      title: 'Button'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
