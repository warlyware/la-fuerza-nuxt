export default {
  name: 'page-resources',
  type: 'document',
  title: 'Page: Resources',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'bookSectionTitle',
      type: 'localeString',
      title: 'Book Section title',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    // {
    //   name: 'bookSectionDescription',
    //   type: 'localeString',
    //   title: 'Book Section description',
    //   validation: Rule => Rule.custom(text => {
    //     if (text && text.en && text.en.length && text.es && text.es.length) {
    //       return true
    //     }
    //     return 'English and Spanish translations required.'
    //   })
    // },
    {
      name: 'enBookSectionDescription',
      type: 'bodyPortableText',
      title: 'Book Section Description [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBookSectionDescription',
      type: 'bodyPortableText',
      title: 'Book Section Description [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'books',
      type: 'array',
      description: 'Books to display',
      of: [{
        type: 'reference',
        to: [{ type: 'book' }]
      }]
    },
    {
      name: 'tipSectionTitle',
      type: 'localeString',
      title: 'Tip Section title',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enTipSectionDescription',
      type: 'bodyPortableText',
      title: 'Tip Section Description [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esTipSectionDescription',
      type: 'bodyPortableText',
      title: 'Tip Section Description [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'tips',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'tip' }]
      }]
    },
    {
      name: 'partnersSectionTitle',
      type: 'localeString',
      title: 'Partners Section title',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enPartnersSectionDescription',
      type: 'bodyPortableText',
      title: 'Partners Section Description [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esPartnersSectionDescription',
      type: 'bodyPortableText',
      title: 'Partners Section Description [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'partners',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'partner' }]
      }]
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Resources' })
  }
}
