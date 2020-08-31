export default {
  name: 'page-about',
  type: 'document',
  title: 'Page: About',
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
      name: 'enAboutText',
      type: 'bodyPortableText',
      title: 'Description [English]',
      description: 'About text'
    },
    {
      name: 'esAboutText',
      type: 'bodyPortableText',
      title: 'Description [Spanish]',
      description: 'About text'
    },
    {
      name: 'ourAlliesTitle',
      type: 'localeString',
      title: 'Title: Our Allies section'
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
      }
    },
    {
      name: 'block1Text',
      type: 'localeString',
      title: 'Block 1 text'
    },
    {
      name: 'block1Button',
      type: 'button',
      title: 'Block 1 Button'
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image 2',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: About' })
  }
}
