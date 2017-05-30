import React, {Component}   from "react";
import axios                from "axios";
import Form                 from "react-jsonschema-form";
import WizardForm           from "../components/wizard/WizardForm";

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};

const log = (type) => console.log.bind(console, type);


class Episode extends Component {

    render() {

        // const request = axios.get('/api/jobSchema.json');
        //
        // request.then(res => {
        //
        //     const schema = res.data;
        //     console.log(schema);
        //     this.setState({schema});
        //
        // });

        return (
           <WizardForm></WizardForm>

        );
    }
}

export default Episode;
