import MdEvent from 'react-icons/lib/md/event-note'

export default {
  name: 'event',
  type: 'document',
  icon: MdEvent,
  title: 'Event',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name',
      validation: Rule => Rule.custom(text => {
        if (text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Enter the City and State, or Online if online only.',
      validation: Rule => Rule.required()
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      options: {
        dateFormat: 'MMMM Do YYYY'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      options: {
        dateFormat: 'MMMM Do YYYY'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'partnerName',
      type: 'string',
      title: 'Partner Name'
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue',
      description: 'If online write Online',
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
      name: 'link',
      type: 'string',
      title: 'Registration Link',
      description: 'URL to the event registration page',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'If the event is free, enter 0. This will display "FREE."',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare({ title }) {
      return { title: title.en }
    }
  }
}
