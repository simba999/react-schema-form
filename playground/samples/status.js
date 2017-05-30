module.exports = {
  schema: {
    title: "A status form",
    description: "A simple form for status tab.",
    type: "object",
    properties: {
      status_state: {
          type: "string",
          title: "Ready to hire?",
          enum: [
            "I'm ready to hire",
            "Planning & budgeting",
            "Quote for insurance",
          ]
        },
    },
  },
  uiSchema: {
    status_state: {
      "ui:widget": "radio",
    },
  },
  formData: {
  },
};
