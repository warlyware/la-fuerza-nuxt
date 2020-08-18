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
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { value: 'videos', title: 'Videos' },
          { value: 'talleres', title: 'Talleres' },
          { value: 'librosEnEspanol', title: 'Libros en Español' }
        ]
      }
    },
    {
      name: 'subCategory',
      type: 'string',
      title: 'Sub Category',
      options: {
        list: [
          { value: 'familiasLatinas', title: 'Familias Latinas: Juntas en Casa' },
          { value: 'momentosDeConexion', title: 'Momentos de Conexión' },
          { value: 'laFuerzaDeCreer', title: 'La Fuerza de Creer' },
          { value: 'meetTheCharacters', title: 'Meet the Characters' },
          { value: 'tallersEnAccion', title: 'Talleres en Acción' },
          { value: 'tallersDigitales', title: 'Talleres Digitales' },
          { value: 'librosEnEspanolVideos', title: 'Libros en Español Videos' }
        ]
      }
    },
    {
      name: 'relatedVideos',
      type: 'array',
      title: 'Related Videos',
      description: 'Videos to display in the "Related Videos" section',
      of: [
        {
          name: 'video',
          type: 'videoReference',
          title: 'Video'
        }
      ]
    },
    {
      name: 'length',
      title: 'Length (in minutes)',
      type: 'number'
    },
    {
      name: 'shortDescription',
      type: 'localeString',
      title: 'Short Description'
    },
    {
      name: 'descriptionEnglish',
      type: 'bodyPortableText',
      title: 'Long description: English'
    },
    {
      name: 'descriptionSpanish',
      type: 'bodyPortableText',
      title: 'Long description: Spanish'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.error('You must add a slug.').required()
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
