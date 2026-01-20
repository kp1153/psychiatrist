import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prescription',
  title: 'Prescription',
  type: 'document',
  fields: [
    defineField({
      name: 'patient',
      title: 'Patient',
      type: 'reference',
      to: [{type: 'patient'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'diagnosis',
      title: 'Diagnosis',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'medicines',
      title: 'Medicines',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'name', type: 'string', title: 'Medicine Name'},
          {name: 'dosage', type: 'string', title: 'Dosage'},
          {name: 'frequency', type: 'string', title: 'Frequency'},
          {name: 'duration', type: 'string', title: 'Duration'},
        ],
      }],
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'text',
    }),
    defineField({
      name: 'nextAppointment',
      title: 'Next Appointment',
      type: 'datetime',
    }),
  ],
})