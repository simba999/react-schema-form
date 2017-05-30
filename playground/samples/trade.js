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
    },
  },
  uiSchema: {
    tradeSlugs: {
      "ui:autofocus": true,
    },
  },
  formData: {
    tradeSlugs: "Chuck",
    skillSlugs: "Norris",
  },
};
