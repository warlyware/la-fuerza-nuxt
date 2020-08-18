export default {
  name: 'message',
  title: 'Other Translation Text',
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
