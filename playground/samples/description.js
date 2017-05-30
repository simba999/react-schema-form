module.exports = {
  schema: {
    title: "A description form",
    description: "A form for description.",
    type: "object",
    required: ["title", "description"],
    properties: {
      title: {
        type: "string",
        title: "job title",
      },
      description: {
        type: "string",
        title: "job description",
      },
    },
  },
  uiSchema: {
    tradeSlugs: {
      "ui:autofocus": true,
    },
  },
  formData: {
    title: "Web developer",
    description: "React Experot",
  },
};
