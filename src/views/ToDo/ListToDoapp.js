import React from "react";
import "./ListToDo.scss";
import AddTodos from "./addTodo";
import { toast } from "react-toastify";
class ListToDoapp extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: " Doing homework" },
      { id: "todo2", title: " Doing freestyle" },
      { id: "todo3", title: " Doing homea" },
    ],
  };
  addnewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };
  render() {
    let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodos addnewTodo={this.addnewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="to-do-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">edit</button>
                  <button className="delete">delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListToDoapp;
