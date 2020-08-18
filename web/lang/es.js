import getTranslations from '~/lib/get-translations'

export default () => {
  return new Promise(function (resolve) {
    resolve(getTranslations('es'))
  })
}
