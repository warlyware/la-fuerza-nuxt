export default {
  name: 'page-workshops',
  type: 'document',
  title: 'Page: Workshops',
  __experimental_actions: ['update', /* 'create', /* 'delete', */ 'publish'],
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
      title: 'Hero'
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'Video Url',
      validation: Rule => Rule.required()
    },
    {
      name: 'enBlock1Text',
      type: 'bodyPortableText',
      title: 'Block 1 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBlock1Text',
      type: 'bodyPortableText',
      title: 'Block 1 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'enBanner1Text',
      type: 'bodyPortableText',
      title: 'Banner 1 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBanner1Text',
      type: 'bodyPortableText',
      title: 'Banner 1 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'enBlock2Text',
      type: 'bodyPortableText',
      title: 'Block 2 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBlock2Text',
      type: 'bodyPortableText',
      title: 'Block 2 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'enBanner2Text',
      type: 'bodyPortableText',
      title: 'Banner 2 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBanner2Text',
      type: 'bodyPortableText',
      title: 'Banner 2 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'banner2Button',
      type: 'button',
      title: 'Banner 2 Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'workshopImageBlocks',
      type: 'array',
      of: [{ type: 'workshopImageBlock' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'enBlock3Text',
      type: 'bodyPortableText',
      title: 'Block 3 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBlock3Text',
      type: 'bodyPortableText',
      title: 'Block 3 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'enBlock4Text',
      type: 'bodyPortableText',
      title: 'Block 4 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBlock4Text',
      type: 'bodyPortableText',
      title: 'Block 4 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'block5Word1',
      type: 'localeString',
      title: 'Block 5: Word 1',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'block5Word2',
      type: 'localeString',
      title: 'Block 5: Word 2',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'block5Word3',
      type: 'localeString',
      title: 'Block 5: Word 3',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enBanner3Text',
      type: 'bodyPortableText',
      title: 'Banner 3 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBanner3Text',
      type: 'bodyPortableText',
      title: 'Banner 3 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'banner3Button',
      type: 'button',
      title: 'Banner 3 Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'enBanner4Text',
      type: 'bodyPortableText',
      title: 'Banner 4 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBanner4Text',
      type: 'bodyPortableText',
      title: 'Banner 4 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'events',
      type: 'array',
      description: 'Events',
      of: [{
        type: 'reference',
        to: [{ type: 'event' }]
      }]
    },
    {
      name: 'newsletterSubscription',
      type: 'newsletterSubscription',
      title: 'Newsletter Subscription'
    },
    {
      name: 'shareMenu',
      type: 'shareMenu',
      title: 'Social Media Share Menu'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Workshops' })
  }
}
