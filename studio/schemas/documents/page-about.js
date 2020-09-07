export default {
  name: 'page-about',
  type: 'document',
  title: 'Page: About',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero',
      validation: Rule => Rule.required()
    },
    {
      name: 'enAboutText',
      type: 'bodyPortableText',
      title: 'Description [English]',
      description: 'About text',
      validation: Rule => Rule.required()
    },
    {
      name: 'esAboutText',
      type: 'bodyPortableText',
      title: 'Description [Spanish]',
      description: 'About text',
      validation: Rule => Rule.required()
    },
    {
      name: 'ourAlliesTitle',
      type: 'localeString',
      title: 'Title: Our Allies section',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'allies',
      type: 'array',
      of: [{ type: 'ally' }]
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Image 1',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'block1Text',
      type: 'localeString',
      title: 'Block 1 text',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'block1Button',
      type: 'button',
      title: 'Block 1 Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image 2',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: About' })
  }
}
