import sanityClient from '~/sanityClient'

export default async (lang) => {
  const result = await sanityClient.fetch(`
    *[_type in [
      "translation", "translation-about", "translation-collaborators",
      "translation-contact", "translation-join",
      "translation-resources", "translation-workshops"
    ] ]{
      key, 'value': value['${lang}']
    }
  `)
  const messages = {}
  result.forEach((message) => {
    messages[message.key] = message.value
  })
  return messages
}
