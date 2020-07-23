// import React from 'react'
// import getYouTubeId from 'get-youtube-id'
// import YouTube from 'react-youtube'

// const Preview = ({ value }) => {
//   const { url } = value
//   const id = getYouTubeId(url)
//   return (<YouTube videoId={id} />)
// }
import MovieIcon from 'react-icons/lib/md/local-movies'

export default {
  type: 'document',
  icon: MovieIcon,
  name: 'video',
  title: 'Video',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Youtube Url',
      type: 'url'
    },
    {
      name: 'length',
      title: 'Length (in minutes)',
      type: 'number'
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Short Description'
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Long description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: '🎬'
    }
  }
  // preview: {
  //   select: {
  //     name: 'name',
  //     url: 'url'
  //   },
  //   component: Preview
  // }
}
