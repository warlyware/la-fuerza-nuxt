export default {
  name: 'translationItem',
  type: 'object',
  title: 'Translation item',
  fields: [
    {
      name: 'translation',
      type: 'reference',
      title: 'Translation',
      to: [
        {
          type: 'translation'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
