import React from "react";

class AddTodos extends React.Component {
  state = {
    title: "",
  };
  handleOnChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddclick = () => {
    if (!this.state.title) {
      alert("missing add ");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };

    this.props.addnewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChange(event)}
        />
        <button
          className="add"
          type="button"
          onClick={() => this.handleAddclick()}
        >
          add
        </button>
      </div>
    );
  }
}
export default AddTodos;
