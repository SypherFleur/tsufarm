export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "date",
      title: "Date & Time",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date & Time",
      type: "datetime",
    },
    {
      name: "time",
      title: "Time Display",
      type: "string",
      description: 'Display string, e.g. "9AM–12PM"',
    },
    {
      name: "type",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Farmer's Stand", value: "stand" },
          { title: "Special Event", value: "special" },
          { title: "Organization Visit", value: "org-visit" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "3216 Blodgett, Houston, TX",
    },
  ],
  orderings: [
    {
      title: "Date, Ascending",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};
