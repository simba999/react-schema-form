module.exports = {
  schema: {
    title: "A budget form",
    description: "A form for budget.",
    type: "object",
    required: ["budgetLow", "budgetHigh"],
    properties: {
      budgetLow: {
        type: "string",
        title: "Maximium budget",
      },
      budgetHigh: {
        type: "string",
        title: "Minium budget",
      },
    },
  },
  uiSchema: {
    tradeSlugs: {
      "ui:autofocus": true,
    },
  },
  formData: {
    budgetLow: "",
    budgetHigh: "",
  },
};
