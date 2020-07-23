export default {
  name: 'privacyPolicy',
  type: 'document',
  title: 'Privacy Policy',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'body',
      description:
        'The privacy policy text to be displayed at /privacy',
      type: 'bodyPortableText',
      title: 'Privacy Policy'
    }
  ],
  preview: {
    select: {
      body: 'body'
    },
    prepare({ body = [] }) {
      const block = body.find(block => block._type === 'block')
      return {
        title: block
          ? block.children
            .filter(child => child._type === 'span')
            .map(span => span.text)
            .join('')
          : 'No title'
      }
    }
  }
}
