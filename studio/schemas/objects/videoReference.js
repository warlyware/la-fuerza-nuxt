export default {
  name: 'videoReference',
  type: 'object',
  title: 'Video reference',
  fields: [
    {
      type: 'reference',
      name: 'video',
      to: [
        {
          type: 'video'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'video.name',
      media: '🎬'
    }
  }
}
