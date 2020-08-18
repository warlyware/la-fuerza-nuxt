export default {
  name: 'translation-about',
  title: 'Page: About Us',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'key',
      title: 'System Key',
      type: 'string'
    },
    {
      name: 'value',
      title: 'Value',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: 'description',
      subtitle: 'value.en'
    }
  }
}
