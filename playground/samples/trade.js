module.exports = {
  schema: {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    required: ["tradeSlugs", "skillSlugs"],
    properties: {
      tradeSlugs: {
        type: "string",
        title: "Select a trade",
      },
      skillSlugs: {
        type: "string",
        title: "Select skills",
      },
      fileType: {
        type: "string",
        format: "data-url",
      },
    },
  },
  uiSchema: {
    tradeSlugs: {
      "ui:autofocus": true,
      "ui:placeholder": "Enter trade here...",
    },
    skillSlugs: {
      "ui:placeholder": "Enter skills here...",
    },
    fileType: {
      "ui:widget": "file",
    },
  },
  formData: {
    tradeSlugs: "",
    skillSlugs: "",
  },
};
