import MdTip from 'react-icons/lib/md/thumb-up'

export default {
  name: 'tip',
  title: 'Tip',
  icon: MdTip,
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'caption',
      type: 'localeString',
      title: 'Caption',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
