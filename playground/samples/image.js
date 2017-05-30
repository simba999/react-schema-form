module.exports = {
  schema: {
    title: "A registration form",
    description: "A simple form for image tab.",
    type: "object",
    properties: {
      fileType: {
        type: "string",
        format: "data-url",
      },
    },
  },
  uiSchema: {
    fileType: {
      "ui:widget": "file",
    },
  },
  formData: {
  },
};
