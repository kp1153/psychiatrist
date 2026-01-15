export default {
  name: 'appointment',
  title: 'Appointments',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
    },
    {
      name: 'patientName',
      title: 'Patient Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'patientEmail',
      title: 'Patient Email',
      type: 'string',
    },
    {
      name: 'patientPhone',
      title: 'Patient Phone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'issueDescription',
      title: 'Issue Description',
      type: 'text',
    },
    {
      name: 'preferredDate',
      title: 'Preferred Date',
      type: 'date',
    },
    {
      name: 'confirmedDateTime',
      title: 'Confirmed Date & Time',
      type: 'datetime',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Requested', value: 'requested'},
          {title: 'Time Slot Given', value: 'slot_given'},
          {title: 'Confirmed', value: 'confirmed'},
          {title: 'Completed', value: 'completed'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
      },
      initialValue: 'requested',
    },
    {
      name: 'notes',
      title: 'Patient Notes',
      type: 'text',
    },
    {
      name: 'doctorNotes',
      title: 'Doctor Notes',
      type: 'text',
    },
  ],
}