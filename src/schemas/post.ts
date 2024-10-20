import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Экскурсия',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Дата',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Стартовая точка',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Цена',
      type: 'number',
    }),
    defineField({
      name: 'availableSeats',
      title: 'Доступные места',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Доп описание',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Главное изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Основной Контент',
      type: 'blockContent',
    }),
    defineField({
      name: 'reviews',
      title: "Отзывы",
      type: "blockContent",
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})