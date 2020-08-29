export default {
  name: 'disclaimer',
  type: 'document',
  title: 'Page: Disclaimer',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'body',
      description:
        'The Disclaimer text to be displayed at /disclaimer',
      type: 'bodyPortableText',
      title: 'Disclaimer'
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
