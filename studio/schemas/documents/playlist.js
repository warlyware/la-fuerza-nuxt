export default {
  name: 'playlist',
  type: 'document',
  title: 'Playlist',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'enPlaylistUrl',
      type: 'string',
      title: 'Playlist URL [English]'
    },
    {
      name: 'esPlaylistUrl',
      type: 'string',
      title: 'Playlist URL [Spanish]'
    },
    {
      name: 'enDescription',
      type: 'bodyPortableText',
      title: 'Description [English]'
    },
    {
      name: 'esDescription',
      type: 'bodyPortableText',
      title: 'Description [Spanish]'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return { title: title.en }
    }
  }
}
