export default {
  name: 'page-home',
  type: 'document',
  title: 'Page: Home',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'video1Url',
      type: 'string',
      title: 'Video 1 URL',
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'block1Text',
    //   type: 'localeString',
    //   title: 'Block 1 Text',
    //   validation: Rule => Rule.custom(text => {
    //     if (text && text.en && text.en.length && text.es && text.es.length) {
    //       return true
    //     }
    //     return 'English and Spanish translations required.'
    //   })
    // },
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
      name: 'block2Title',
      type: 'localeString',
      title: 'Block 2: Title',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'block2Button1',
      type: 'button',
      title: 'Block 2: Button 1',
      validation: Rule => Rule.required()
    },
    {
      name: 'block2Button2',
      type: 'button',
      title: 'Block 2: Button 2',
      validation: Rule => Rule.required()
    },
    {
      name: 'block2Button3',
      type: 'button',
      title: 'Block 2: Button 3',
      validation: Rule => Rule.required()
    },
    {
      name: 'block2Button4',
      type: 'button',
      title: 'Block 2: Button 4',
      validation: Rule => Rule.required()
    },
    {
      name: 'block2Button5',
      type: 'button',
      title: 'Block 2: Button 5',
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'block3Text',
    //   type: 'localeString',
    //   title: 'Block 3: Text',
    //   validation: Rule => Rule.custom(text => {
    //     if (text && text.en && text.en.length && text.es && text.es.length) {
    //       return true
    //     }
    //     return 'English and Spanish translations required.'
    //   })
    // },
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
      name: 'block3Button',
      type: 'button',
      title: 'Block 3: Button',
      validation: Rule => Rule.required()
    },
    {
      name: 'video2Url',
      type: 'string',
      title: 'Video 2 URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'video3Url',
      type: 'string',
      title: 'Video 3 URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'video4Url',
      type: 'string',
      title: 'Video 4 URL',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Home' })
  }
}
