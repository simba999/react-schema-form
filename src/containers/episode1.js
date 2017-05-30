import React, {Component} from "react";
import axios from "axios";
import Form from "react-jsonschema-form";

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


class Episode1 extends Component {

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
            <div>
                <Form schema={schema}
                      onChange={log("changed")}
                      onSubmit={log("submitted")}
                      onError={log("errors")} />
                <button type="button" className="previous">
                    Previous
                </button>
                <button type="submit" className="next">Next</button>
            </div>


        );
    }
}

export default Episode1;
