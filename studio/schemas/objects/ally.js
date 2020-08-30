export default {
  name: 'ally',
  title: 'Ally',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Logo Image',
      name: 'image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
