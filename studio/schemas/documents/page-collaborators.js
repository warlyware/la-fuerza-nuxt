export default {
  name: 'page-collaborators',
  type: 'document',
  title: 'Page: Collaborators',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
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
      name: 'banner1Text',
      type: 'localeString',
      title: 'Banner 1 Text'
    },
    {
      name: 'banner1LinkText',
      type: 'localeString',
      title: 'Banner 1 Link Text'
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
      name: 'section1Title',
      type: 'localeString',
      title: 'Section 1 Title'
    },
    {
      name: 'block3Text',
      type: 'localeString',
      title: 'Block 3 Text'
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
      name: 'block4ButtonText',
      type: 'localeString',
      title: 'Block 4 Button Text'
    },
  ],
  preview: {
    prepare: () => ({ title: 'Page: Collaborators' })
  }
}
