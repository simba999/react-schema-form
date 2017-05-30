module.exports = {
  schema: {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    properties: {
      code: {
        type: "string",
        title: "Code",
      },
    },
  },
  uiSchema: {
    code: {
      "ui:placeholder": "Enter code here...",
    },
  },
  formData: {
    code: "",
  },
};
