export default {
  name: "pastEvent",
  title: "Past Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "partners",
      title: "Partners",
      type: "array",
      of: [{ type: "reference", to: [{ type: "partner" }] }],
    },
  ],
  orderings: [
    {
      title: "Date, Descending",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};
