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
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'caption',
      type: 'localeString',
      title: 'Caption'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
