export default {
  name: 'page-home',
  type: 'document',
  title: 'Page: Home',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'video1Url',
      type: 'string',
      title: 'Video 1 URL'
    },
    {
      name: 'block1Text',
      type: 'localeString',
      title: 'Block 1 Text'
    },
    {
      name: 'block2Title',
      type: 'localeString',
      title: 'Block 2: Title'
    },
    {
      name: 'block2Button1',
      type: 'button',
      title: 'Block 2: Button 1'
    },
    {
      name: 'block2Button2',
      type: 'button',
      title: 'Block 2: Button 2'
    },
    {
      name: 'block2Button3',
      type: 'button',
      title: 'Block 2: Button 3'
    },
    {
      name: 'block2Button4',
      type: 'button',
      title: 'Block 2: Button 4'
    },
    {
      name: 'block2Button1Text',
      type: 'localeString',
      title: 'Block 2: Button 1 text'
    },
    {
      name: 'block2Button2Text',
      type: 'localeString',
      title: 'Block 2: Button 2 text'
    },
    {
      name: 'block2Button3Text',
      type: 'localeString',
      title: 'Block 2: Button 3 text'
    },
    {
      name: 'block2Button4Text',
      type: 'localeString',
      title: 'Block 2: Button 4 text'
    },
    {
      name: 'block3Text',
      type: 'localeString',
      title: 'Block 3: Text'
    },
    {
      name: 'block3Button',
      type: 'button',
      title: 'Block 3: Button'
    },
    {
      name: 'video2Url',
      type: 'string',
      title: 'Video 2 URL'
    },
    {
      name: 'video3Url',
      type: 'string',
      title: 'Video 3 URL'
    },
    {
      name: 'video4Url',
      type: 'string',
      title: 'Video 4 URL'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Home' })
  }
}
