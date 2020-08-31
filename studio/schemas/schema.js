// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import about from './documents/page-about'
import collaborators from './documents/page-collaborators'
import contactPage from './documents/page-contact'
import home from './documents/page-home'
import join from './documents/page-join'
import resources from './documents/page-resources'
import tips from './documents/page-tips'
import videos from './documents/page-videos'
import workshops from './documents/page-workshops'
// import navigation from './documents/navigation'
import disclaimer from './documents/disclaimer'
// import video from './documents/video'
import privacyPolicy from './documents/privacyPolicy'
import codeOfConduct from './documents/codeOfConduct'
import playlist from './documents/playlist'
import book from './documents/book'
import event from './documents/event'
import tip from './documents/tip'

// Object types
import mainImage from './objects/mainImage'
import venue from './objects/venue'
import bioPortableText from './objects/bioPortableText'
import bodyPortableText from './objects/bodyPortableText'
import social from './objects/social'
import localeString from './objects/localeString'
import hero from './objects/hero'
import ally from './objects/ally'
import contact from './objects/contact'
import button from './objects/button'
import joinBlock from './objects/joinBlock'
import collaboratorBlock from './objects/collaboratorBlock'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'event',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    codeOfConduct,
    // eventInformation,
    // person,
    venue,
    // session,
    disclaimer,
    privacyPolicy,
    // video,

    about,
    collaborators,
    contactPage,
    home,
    join,
    resources,
    tips,
    videos,
    workshops,
    // navigation,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    // schedule,
    // program,
    // scheduleItem,
    // videoItem,
    mainImage,
    playlist,
    bioPortableText,
    bodyPortableText,
    // personReference,
    // videoReference,
    social,
    localeString,
    hero,
    ally,
    book,
    event,
    tip,
    contact,
    button,
    joinBlock,
    collaboratorBlock
  ])
})
