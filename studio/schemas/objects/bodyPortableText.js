import React from 'react'

const XxlTextStyle = props => (
  <span style={{ fontSize: '1.875rem', fontWeight: 'normal' }}>{props.children}</span>
)
const XlTextStyle = props => (
  <span style={{ fontSize: '1.5rem', fontWeight: 'normal' }}>{props.children}</span>
)
const LargeTextStyle = props => (
  <span style={{ fontSize: '1.25rem', fontWeight: 'normal' }}>{props.children}</span>
)
const MediumlTextStyle = props => (
  <span style={{ fontSize: '1.125rem', fontWeight: 'normal' }}>{props.children}</span>
)

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        {
          title: 'XXL',
          value: 'h1',
          blockEditor: {
            render: XxlTextStyle
          }
        },
        {
          title: 'XL',
          value: 'h2',
          blockEditor: {
            render: XlTextStyle
          }
        },
        {
          title: 'Large',
          value: 'h3',
          blockEditor: {
            render: LargeTextStyle
          }
        },
        {
          title: 'Medium',
          value: 'h4',
          blockEditor: {
            render: MediumlTextStyle
          }
        }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({ scheme: ['tel', 'mailto', 'http', 'https'] })
              }
            ]
          }
        ]
      }
    }
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // {
    //   type: 'image',
    //   options: { hotspot: true }
    // }
  ]
}
