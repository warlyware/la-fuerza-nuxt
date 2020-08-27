export default {
  name: 'page-home',
  type: 'document',
  title: 'Page: Home',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'blockOneText',
      type: 'localeString',
      title: 'Block 1 Text'
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Home' })
  }
}
