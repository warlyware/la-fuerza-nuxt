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
      name: 'aboutTextEn',
      type: 'bodyPortableText',
      title: 'Description: English',
      description: 'About text'
    },
    {
      name: 'aboutTextEs',
      type: 'bodyPortableText',
      title: 'Description: Spanish',
      description: 'About text'
    },
    {
      name: 'ourAlliesTitle',
      type: 'localeString',
      title: 'Title: Our Allies section'
    },
    {
      name: 'blockOneText',
      type: 'localeString',
      title: 'Block 1 text'
    },
    {
      name: 'blockOneButtonText',
      type: 'localeString',
      title: 'Block 1 button text'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: About' })
  }
}
