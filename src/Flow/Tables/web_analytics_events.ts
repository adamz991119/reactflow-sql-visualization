const webAnalyticsEventsTable = {
  schema: "web_analytics",
  name: "events",
  description: "This table contains all events that happen on Bindle's website pages. Events are tracked during a pageview, that's why there's a has-many relation between pageviews and events.",
  columns: [
    {
      name: "pageview_id",
      description: "Category parameter of an event, for example Signup.",
      type: "text",
      handleType: "target"
    },
    {
      name: "category",
      description: "Action parameter of an event, for example Click.",
      type: "text"
    },
    {
      name: "action",
      description: "Name parameter of an event, for example Signup for free.",
      type: "text"
    },
    {
      name: "name",
      description: "Unique identifier of a record inside pageviews table. All events happen within one pageview. ⚠️",
      type: "text"
    },
    {
      name: "created_at",
      description: "Timestamp of an event.",
      type: "datetime"
    }
  ]
};

export default webAnalyticsEventsTable;
