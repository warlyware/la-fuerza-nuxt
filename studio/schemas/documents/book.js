import MdBook from 'react-icons/lib/md/book'

export default {
  name: 'book',
  type: 'document',
  icon: MdBook,
  title: 'Book',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: Rule => Rule.required()
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
      title: 'Cover [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esCover',
      type: 'image',
      title: 'Cover [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'Read Along Video URL',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Image 1',
      options: { hotspot: true },
      validation: Rule => Rule.required()
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
      title: 'Description [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esDescription',
      type: 'bodyPortableText',
      title: 'Description [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'enExcerpt',
      type: 'bodyPortableText',
      title: 'Excerpt [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esExcerpt',
      type: 'bodyPortableText',
      title: 'Excerpt [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'shareMenu',
      type: 'shareMenu',
      title: 'Social Media Share Menu'
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
