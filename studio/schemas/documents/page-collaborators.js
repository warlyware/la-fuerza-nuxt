export default {
  name: 'page-collaborators',
  type: 'document',
  title: 'Page: Collaborators',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
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
      name: 'collaboratorsSectionTitle',
      type: 'localeString',
      title: 'How To Collaborate Section Title'
    },
    {
      name: 'collaboratorBlocks',
      type: 'array',
      of: [{ type: 'collaboratorBlock' }]
    },
    {
      name: 'block4Text',
      type: 'localeString',
      title: 'Block 4 Text'
    },
    {
      name: 'enBlock5Text',
      type: 'bodyPortableText',
      title: 'Block 5 Text [English]'
    },
    {
      name: 'esBlock5Text',
      type: 'bodyPortableText',
      title: 'Block 5 Text [Spanish]'
    },
    {
      name: 'block5Button',
      type: 'button',
      title: 'Block 5 Button'
    },
    {
      name: 'enBlock6Text',
      type: 'bodyPortableText',
      title: 'Block 6 Text [English]'
    },
    {
      name: 'esBlock6Text',
      type: 'bodyPortableText',
      title: 'Block 6 Text [Spanish]'
    },
    {
      name: 'block6Button',
      type: 'button',
      title: 'Block 6 Button'
    },
    {
      name: 'block7Button',
      type: 'button',
      title: 'Block 7 Button'
    },
    {
      name: 'enBlock7Text',
      type: 'bodyPortableText',
      title: 'Block 7 Text [English]'
    },
    {
      name: 'esBlock7Text',
      type: 'bodyPortableText',
      title: 'Block 7 Text [Spanish]'
    },
    {
      name: 'banner2Text',
      type: 'localeString',
      title: 'Banner 2 Text'
    },
    {
      name: 'events',
      type: 'array',
      description: 'Events',
      of: [{
        type: 'reference',
        to: [{ type: 'event' }]
      }]
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Collaborators' })
  }
}
