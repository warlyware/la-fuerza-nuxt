import MdFace from 'react-icons/lib/md/face'

export default {
  name: 'partner',
  title: 'Partner',
  icon: MdFace,
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Logo Image',
      name: 'logo',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Parent Organization',
      type: 'string',
      name: 'parentOrganization',
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
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Image 1',
      validation: Rule => Rule.required()
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image 2'
    },
    {
      name: 'resourceDownloads',
      type: 'array',
      of: [{ type: 'resourceDownload' }]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'shareMenu',
      type: 'shareMenu',
      title: 'Social Media Share Menu'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
