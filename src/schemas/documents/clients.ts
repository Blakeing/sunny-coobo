import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clients',
  title: 'Clients',
  type: 'document',
  icon: ImageIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'clientImage',
      title: 'Client Image',
      description:
        'This image will be used as an image within the client slider on the homepage.',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
})
