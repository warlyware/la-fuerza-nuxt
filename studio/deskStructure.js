import S from '@sanity/desk-tool/structure-builder'
// import MdPerson from 'react-icons/lib/md/person'
// import MdEventNote from 'react-icons/lib/md/event'
// import MdGavel from 'react-icons/lib/md/gavel'
import MdWarning from 'react-icons/lib/md/warning'
import MdInfo from 'react-icons/lib/md/info-outline'

const hiddenDocTypes = listItem =>
  ![
    'program',
    'session',
    'person',
    'eventInformation',
    'codeOfConduct',
    'disclaimer',
    'privacyPolicy',
    'page-about'
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
        .title('Disclaimer')
        .icon(MdWarning)
        .child(
          S.editor()
            .id('disclaimer')
            .schemaType('disclaimer')
            .documentId('disclaimer')
        ),
      S.listItem()
        .title('Privacy Policy')
        .icon(MdInfo)
        .child(
          S.editor()
            .id('privacyPolicy')
            .schemaType('privacyPolicy')
            .documentId('privacyPolicy')
        ),
      // S.listItem()
      //   .title('Sessions')
      //   .schemaType('session')
      //   .child(S.documentTypeList('session').title('Sessions')),
      // S.listItem()
      //   .title('Program')
      //   .icon(MdEventNote)
      //   .child(
      //     S.editor()
      //       .id('program')
      //       .schemaType('program')
      //       .documentId('program')
      //   ),
      // S.listItem()
      //   .title('Persons')
      //   .icon(MdPerson)
      //   .schemaType('person')
      //   .child(S.documentTypeList('person').title('Persons')),
      // S.listItem()
      //   .title('Code of Conduct')
      //   .icon(MdGavel)
      //   .child(
      //     S.editor()
      //       .id('codeOfConduct')
      //       .schemaType('codeOfConduct')
      //       .documentId('codeOfConduct')
      //   ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
