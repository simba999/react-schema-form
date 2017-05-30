module.exports = {
  schema: {
    title: "A Contact Details form",
    description: "A simple form for contact detail.",
    type: "object",
    properties: {
      firstName: {
        type: "string",
        title: "Your First Name",
      },
      lastName: {
        type: "string",
        title: "Your Last Name",
      },
      email: {
        type: "string",
        title: "Your email",
      },
      mobile: {
        type: "string",
        title: "Your mobile number",
      },
      address: {
        type: "string",
        title: "Your address",
      },
    },
  },
  uiSchema: {
    firstName: {
      "ui:placeholder": "Enter name here...",
    },
    lastName: {
      "ui:placeholder": "Enter name here...",
    },
    email: {
      "ui:placeholder": "Enter email here...",
    },
    mobile: {
      "ui:placeholder": "Enter number here...",
    },
    address: {
      "ui:placeholder": "Enter code / house here...",
    },
  },
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
  },
};
