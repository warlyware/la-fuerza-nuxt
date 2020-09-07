export default {
  name: 'collaboratorBlock',
  title: 'Collaborator Block',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: Rule => Rule.custom(({ en, es }) => {
        if (en && en.length && es && es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
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
      title: 'title'
    },
    prepare: ({ title }) => ({ title: title.en })
  }
}
