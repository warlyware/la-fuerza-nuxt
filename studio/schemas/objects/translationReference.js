export default {
  name: 'translationReference',
  type: 'object',
  title: 'Translation reference',
  fields: [
    {
      type: 'reference',
      name: 'translation',
      to: [
        {
          type: 'translation'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'translation.name',
      media: '🎬'
    }
  }
}
