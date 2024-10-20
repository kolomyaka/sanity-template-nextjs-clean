// src/schemas/reviewSection.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reviewSection',
  title: 'Фотографии отзывов',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    }),
  ],
})