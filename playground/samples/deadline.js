module.exports = {
  schema: {
    title: "A  form",
    description: "A simple form for deadline tab.",
    type: "object",
    properties: {
      deadline_state: {
          type: "string",
          title: "When do you need your job completed?",
          enum: [
            "Urgently",
            "Within 2 weeks",
            "Within a week",
            "Flexible deadline",
          ]
        },
    },
  },
  uiSchema: {
    deadline_state: {
      "ui:widget": "radio",
    },
  },
  formData: {
  },
};
