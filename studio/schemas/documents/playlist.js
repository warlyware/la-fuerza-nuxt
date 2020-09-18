import MdPlaylist from 'react-icons/lib/md/playlist-play'

export default {
  name: 'playlist',
  type: 'document',
  title: 'Playlist',
  icon: MdPlaylist,
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'enPlaylistUrl',
      type: 'string',
      title: 'Playlist URL [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esPlaylistUrl',
      type: 'string',
      title: 'Playlist URL [Spanish]',
      validation: Rule => Rule.required()
    },
    {
      name: 'enDescription',
      type: 'bodyPortableText',
      title: 'Description [English]',
      validation: Rule => Rule.required()
    },
    {
      name: 'esDescription',
      type: 'bodyPortableText',
      title: 'Description [Spanish]',
      validation: Rule => Rule.required()
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
