export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name'
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Enter the City and State, or Online if online only.'
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      options: {
        dateFormat: 'MMMM Do YYYY'
      }
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      options: {
        dateFormat: 'MMMM Do YYYY'
      }
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
      description: 'Enter the venue. Not required if event is online only.'
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
    },
    {
      name: 'link',
      type: 'string',
      title: 'Registration Link',
      description: 'URL to the event registration page'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'If the event is free, enter 0'
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
