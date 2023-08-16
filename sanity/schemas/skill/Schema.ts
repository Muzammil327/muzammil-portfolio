import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year', 
      type: 'string'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      position: 'position',
      media: 'image',
    },
    prepare(selection) {
      const {position} = selection
      return {...selection, subtitle: position && `by ${position}`}
    },
  },
})
