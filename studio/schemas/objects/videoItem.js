export default {
  name: 'videoItem',
  type: 'object',
  title: 'Video item',
  fields: [
    {
      name: 'video',
      type: 'reference',
      title: 'Video',
      to: [
        {
          type: 'video'
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
