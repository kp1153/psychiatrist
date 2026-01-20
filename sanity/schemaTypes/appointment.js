import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'appointment',
  title: 'Appointment',
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
      name: 'appointmentDate',
      title: 'Appointment Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prescription',
      title: 'Related Prescription',
      type: 'reference',
      to: [{type: 'prescription'}],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Scheduled', 'Completed', 'Cancelled'],
      },
      initialValue: 'Scheduled',
    }),
    defineField({
      name: 'reminderSent',
      title: 'Reminder Sent',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})