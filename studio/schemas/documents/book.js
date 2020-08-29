export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author'
    },
    {
      name: 'illustrator',
      type: 'string',
      title: 'Illustrator'
    },
    {
      name: 'publisher',
      type: 'string',
      title: 'Publisher'
    },
    {
      name: 'enCover',
      type: 'image',
      title: 'Cover [English]'
    },
    {
      name: 'esCover',
      type: 'image',
      title: 'Cover [Spanish]'
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'Read Along Video URL'
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Image 1',
      options: { hotspot: true }
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image 2',
      options: { hotspot: true }
    },
    {
      name: 'enDescription',
      type: 'bodyPortableText',
      title: 'Description [English]'
    },
    {
      name: 'esDescription',
      type: 'bodyPortableText',
      title: 'Description [Spanish]'
    },
    {
      name: 'enExcerpt',
      type: 'bodyPortableText',
      title: 'Excerpt [English]'
    },
    {
      name: 'esExcerpt',
      type: 'bodyPortableText',
      title: 'Excerpt [Spanish]'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96
      },
      validation: Rule => Rule.error('You must add a slug.').required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return { title: title.en }
    }
  }
}
