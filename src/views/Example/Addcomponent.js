import React from "react";
import { Button, Checkbox, Form, Item } from "semantic-ui-react";
class AddComponent extends React.Component {
  state = {
    title: "",
    total: "",
  };
  handleonChangeTitleJobs = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleonChangeTotal = (event) => {
    this.setState({
      total: event.target.value,
    });
  };
  handonClick = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.total) {
      alert("Missing");
      return;
    }

    console.log("check data input : ", this.state);
    this.props.addnewJob({
      id: Math.floor(Math.random() * 11),
      title: this.state.title,
      total: this.state.total,
    });

    this.setState({
      title: "",
      total: "",
    });
  };

  render() {
    return (
      <>
        <Form className="create-form">
          <Form.Field>
            <label>Job title</label>
            <input
              placeholder="First Name"
              value={this.state.title}
              onChange={(event) => this.handleonChangeTitleJobs(event)}
            />
          </Form.Field>
          <Form.Field>
            <label>Total</label>
            <input
              placeholder="Last Name"
              value={this.state.total}
              onChange={(event) => this.handleonChangeTotal(event)}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit" onClick={(e) => this.handonClick(e)}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default AddComponent;
