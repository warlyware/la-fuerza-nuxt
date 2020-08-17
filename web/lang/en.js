import getMessages from '~/lib/get-messages'

export default () => {
  return new Promise(function (resolve) {
    resolve(getMessages('en'))
  })
}
