import React, {Component}   from "react";
import axios                from "axios";
import Form                 from "react-jsonschema-form";
import WizardForm           from "../components/wizard/WizardForm";

const log = (type) => console.log.bind(console, type);


class Episode extends Component {

    render() {

        return (
           <WizardForm></WizardForm>
        );
    }
}

export default Episode;
