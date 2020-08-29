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
      name: 'block1Text',
      type: 'localeString',
      title: 'Block 1 text'
    },
    {
      name: 'block1ButtonText',
      type: 'localeString',
      title: 'Block 1 button text'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: About' })
  }
}
