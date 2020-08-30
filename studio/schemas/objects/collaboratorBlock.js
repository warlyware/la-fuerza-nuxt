export default {
  name: 'collaboratorBlock',
  title: 'Collaborator Block',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
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
      title: 'title'
    },
    prepare: ({ title }) => ({ title: title.en })
  }
}
