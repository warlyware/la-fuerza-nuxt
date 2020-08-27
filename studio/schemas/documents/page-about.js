export default {
  name: 'page-about',
  type: 'document',
  title: 'Page: About',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
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
    // {
    //   name: 'image',
    //   type: 'mainImage',
    //   title: 'Event image'
    // },
    // {
    //   name: 'schedule',
    //   type: 'schedule',
    //   title: 'Schedule',
    //   description: 'From when to when will the event last?'
    // },
    // {
    //   name: 'venue',
    //   type: 'venue',
    //   title: 'Venue',
    //   description: 'Where will the event take place?'
    // },
    // {
    //   name: 'ticket',
    //   type: 'url',
    //   title: 'Ticket link'
    // },
    // {
    //   name: 'keywords',
    //   type: 'array',
    //   title: 'Keywords',
    //   description: 'Add keywords that describes your event.',
    //   of: [{ type: 'string' }],
    //   options: {
    //     layout: 'tags'
    //   }
    // }
  ],
  preview: {
    prepare: () => ({ title: 'Page: About!' })
  }
}
