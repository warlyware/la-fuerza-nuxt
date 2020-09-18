export default {
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'address',
      type: 'bodyPortableText',
      title: 'Address'
    },
    {
      title: 'Phone Number',
      type: 'string',
      name: 'phone'
    },
    {
      title: 'Fax Number',
      type: 'string',
      name: 'fax'
    },
    {
      title: 'Email Address',
      type: 'string',
      name: 'email'
    }
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare: ({ name }) => ({ title: name.en })
  }
}
