export default {
  name: 'page-collaborators',
  type: 'document',
  title: 'Page: Collaborators',
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
      name: 'collaboratorsSectionTitle',
      type: 'localeString',
      title: 'How To Collaborate Section Title',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'collaboratorBlocks',
      type: 'array',
      of: [{ type: 'collaboratorBlock' }]
    },
    {
      name: 'block4Text',
      type: 'localeString',
      title: 'Block 4 Text',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enBlock5Text',
      type: 'bodyPortableText',
      title: 'Block 5 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBlock5Text',
      type: 'bodyPortableText',
      title: 'Block 5 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'block5Button',
      type: 'button',
      title: 'Block 5 Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'enBlock6Text',
      type: 'bodyPortableText',
      title: 'Block 6 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBlock6Text',
      type: 'bodyPortableText',
      title: 'Block 6 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'block6Button',
      type: 'button',
      title: 'Block 6 Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'block7Button',
      type: 'button',
      title: 'Block 7 Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'block6Block7Title',
      type: 'localeString',
      title: 'Block 6 & 7 Title',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enBlock7Text',
      type: 'bodyPortableText',
      title: 'Block 7 Text [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esBlock7Text',
      type: 'bodyPortableText',
      title: 'Block 7 Text [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'banner2Text',
      type: 'localeString',
      title: 'Banner 2 Text',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
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
      name: 'shareMenu',
      type: 'shareMenu',
      title: 'Social Media Share Menu'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Collaborators' })
  }
}
