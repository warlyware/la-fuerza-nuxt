export default {
  name: 'page-workshops',
  type: 'document',
  title: 'Page: Workshops',
  __experimental_actions: ['update', /* 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero'
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'Video Url'
    },
    {
      name: 'enBlock1Text',
      type: 'bodyPortableText',
      title: 'Block 1 Text [English]'
    },
    {
      name: 'esBlock1Text',
      type: 'bodyPortableText',
      title: 'Block 1 Text [Spanish]'
    },
    {
      name: 'enBanner1Text',
      type: 'bodyPortableText',
      title: 'Banner 1 Text [English]'
    },
    {
      name: 'esBanner1Text',
      type: 'bodyPortableText',
      title: 'Banner 1 Text [Spanish]'
    },
    {
      name: 'enBlock2Text',
      type: 'bodyPortableText',
      title: 'Block 2 Text [English]'
    },
    {
      name: 'esBlock2Text',
      type: 'bodyPortableText',
      title: 'Block 2 Text [Spanish]'
    },
    {
      name: 'enBanner2Text',
      type: 'bodyPortableText',
      title: 'Banner 2 Text [English]'
    },
    {
      name: 'esBanner2Text',
      type: 'bodyPortableText',
      title: 'Banner 2 Text [Spanish]'
    },
    {
      name: 'banner2Button',
      type: 'button',
      title: 'Banner 2 Button'
    },
    {
      name: 'workshopImageSectionTitle',
      type: 'localeString',
      title: 'Workshop Image Section Title'
    },
    {
      name: 'workshopImageBlocks',
      type: 'array',
      of: [{ type: 'workshopImageBlock' }]
    },
    {
      name: 'enBlock3Text',
      type: 'bodyPortableText',
      title: 'Block 3 Text [English]'
    },
    {
      name: 'esBlock3Text',
      type: 'bodyPortableText',
      title: 'Block 3 Text [Spanish]'
    },
    {
      name: 'enBlock4Text',
      type: 'bodyPortableText',
      title: 'Block 4 Text [English]'
    },
    {
      name: 'esBlock4Text',
      type: 'bodyPortableText',
      title: 'Block 4 Text [Spanish]'
    },
    {
      name: 'block5Word1',
      type: 'localeString',
      title: 'Block 5: Word 1'
    },
    {
      name: 'block5Word2',
      type: 'localeString',
      title: 'Block 5: Word 2'
    },
    {
      name: 'block5Word3',
      type: 'localeString',
      title: 'Block 5: Word 3'
    },
    {
      name: 'enBanner3Text',
      type: 'bodyPortableText',
      title: 'Banner 3 Text [English]'
    },
    {
      name: 'esBanner3Text',
      type: 'bodyPortableText',
      title: 'Banner 3 Text [Spanish]'
    },
    {
      name: 'banner3Button',
      type: 'button',
      title: 'Banner 3 Button'
    },
    {
      name: 'enBanner4Text',
      type: 'bodyPortableText',
      title: 'Banner 4 Text [English]'
    },
    {
      name: 'esBanner4Text',
      type: 'bodyPortableText',
      title: 'Banner 4 Text [Spanish]'
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
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Workshops' })
  }
}
