import sanityClient from '~/sanityClient'

export default async (lang) => {
  const result = await sanityClient.fetch(`
    *[_type == 'message']{
      key, 'value': value['${lang}']
    }
  `)
  const messages = {}
  result.forEach((message) => {
    messages[message.key] = message.value
  })
  return messages
}
