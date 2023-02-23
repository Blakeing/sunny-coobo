import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
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
      name: 'testmonialImage',
      title: 'Testimonial Image',
      description:
        'This image will be used as the image for the testimonials sliders on the homepage.',
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
