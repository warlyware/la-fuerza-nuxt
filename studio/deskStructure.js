import S from '@sanity/desk-tool/structure-builder'
import MdBook from 'react-icons/lib/md/book'
import MdTip from 'react-icons/lib/md/thumb-up'
import MdPlaylist from 'react-icons/lib/md/playlist-play'
import MdEvent from 'react-icons/lib/md/event-note'
import MdGear from 'react-icons/lib/md/settings'
import MdFace from 'react-icons/lib/md/face'
// import MdWarning from 'react-icons/lib/md/warning'
// import MdInfo from 'react-icons/lib/md/info-outline'

const hiddenDocTypes = listItem =>
  ![
    'event',
    'book',
    'partner',
    'tip',
    'playlist',
    'session',
    'person',
    'codeOfConduct',
    'disclaimer',
    'privacyPolicy',
    'page-about',
    'page-collaborators',
    'page-contact',
    'page-home',
    'page-join',
    'page-resources',
    'page-tips',
    'page-videos',
    'page-workshops',
    'settings'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Books')
        .icon(MdBook)
        .schemaType('book')
        .child(S.documentTypeList('book').title('Books')),
      S.listItem()
        .title('Partners')
        .icon(MdFace)
        .schemaType('partner')
        .child(S.documentTypeList('partner').title('Partners')),
      S.listItem()
        .title('Events')
        .icon(MdEvent)
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),
      S.listItem()
        .title('Playlists')
        .icon(MdPlaylist)
        .schemaType('playlist')
        .child(S.documentTypeList('playlist').title('Playlists')),
      S.listItem()
        .title('Tips')
        .icon(MdTip)
        .schemaType('tip')
        .child(S.documentTypeList('tip').title('Tips')),
      S.listItem()
        .title('Settings')
        .icon(MdGear)
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        ),
      S.listItem()
        .title('Page: About')
        .child(
          S.editor()
            .id('page-about')
            .schemaType('page-about')
            .documentId('page-about')
        ),
      S.listItem()
        .title('Page: Collaborators')
        .child(
          S.editor()
            .id('page-collaborators')
            .schemaType('page-collaborators')
            .documentId('page-collaborators')
        ),
      S.listItem()
        .title('Page: Contact')
        .child(
          S.editor()
            .id('page-contact')
            .schemaType('page-contact')
            .documentId('page-contact')
        ),
      S.listItem()
        .title('Page: Home')
        .child(
          S.editor()
            .id('page-home')
            .schemaType('page-home')
            .documentId('page-home')
        ),
      S.listItem()
        .title('Page: Join')
        .child(
          S.editor()
            .id('page-join')
            .schemaType('page-join')
            .documentId('page-join')
        ),
      S.listItem()
        .title('Page: Resources')
        .child(
          S.editor()
            .id('page-resources')
            .schemaType('page-resources')
            .documentId('page-resources')
        ),
      S.listItem()
        .title('Page: Tips')
        .child(
          S.editor()
            .id('page-tips')
            .schemaType('page-tips')
            .documentId('page-tips')
        ),
      S.listItem()
        .title('Page: Videos')
        .child(
          S.editor()
            .id('page-videos')
            .schemaType('page-videos')
            .documentId('page-videos')
        ),
      S.listItem()
        .title('Page: Workshops')
        .child(
          S.editor()
            .id('page-workshops')
            .schemaType('page-workshops')
            .documentId('page-workshops')
        ),
      S.listItem()
        .title('Page: Disclaimer')
        .child(
          S.editor()
            .id('disclaimer')
            .schemaType('disclaimer')
            .documentId('disclaimer')
        ),
      S.listItem()
        .title('Page: Privacy Policy')
        .child(
          S.editor()
            .id('privacyPolicy')
            .schemaType('privacyPolicy')
            .documentId('privacyPolicy')
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
