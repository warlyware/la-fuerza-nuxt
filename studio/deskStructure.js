import S from '@sanity/desk-tool/structure-builder'
// import MdPerson from 'react-icons/lib/md/person'
// import MdEventNote from 'react-icons/lib/md/event'
// import MdGavel from 'react-icons/lib/md/gavel'
// import MdWarning from 'react-icons/lib/md/warning'
// import MdInfo from 'react-icons/lib/md/info-outline'

const hiddenDocTypes = listItem =>
  ![
    'program',
    'session',
    'person',
    'eventInformation',
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
    'navigation'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
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
      // S.listItem()
      //   .title('Navigation')
      //   .child(
      //     S.editor()
      //       .id('navigation')
      //       .schemaType('navigation')
      //       .documentId('navigation')
      //   ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
