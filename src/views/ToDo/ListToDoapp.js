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
    editTodo: {}
  };
  addnewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Thêm thành công!");
  };
  handledeleteTodo = (todo) =>{
    console.log(">>>check to do",todo);
    let currenttodo = this.state.listTodos;
    currenttodo = currenttodo.filter(item => item.id !== todo.id);
    this.setState({
      listTodos: currenttodo,
    })
    toast.success("xóa thành công!");
  }
  handleEditTodo = (todo) =>{
    console.log(">>>check edit to do",todo);
    let {editTodo , listTodos} = this.state;
    let isEmptyOjb = Object.keys(editTodo).length === 0;
    //save
    if(isEmptyOjb === false && editTodo.id === todo.id){
      let listTodosCopy = [...listTodos];

      let ObjectIndex = listTodosCopy.findIndex((item => item.id === todo.id));

      listTodosCopy[ObjectIndex].title = editTodo.title;
      this.setState({
        listTodosCopy: listTodosCopy,
        editTodo: {}
      });
      toast.success("Update todo Success!");
      return;
    }
    this.setState({editTodo:todo});
  }
  handleEditchange = (event) =>{
    let editTodoCopy = {...this.state.editTodo};
    editTodoCopy.title = event.target.value;
    
    
    
    
    
    
    this.setState({
      editTodo: editTodoCopy,

    })
  }
  render() {
    let { listTodos,editTodo } = this.state;
    let isEmptyOjb = Object.keys(editTodo).length === 0;
    console.log(">>>check empty ojb",isEmptyOjb);
    return (
      <div className="list-todo-container">
        <AddTodos addnewTodo={this.addnewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="to-do-child" key={item.id}>
                  {isEmptyOjb === true ?
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  :
                  <>
                  {editTodo.id === item.id ?
                  <span> {index +1} - 
                  <input value={editTodo.title}
                  onChange={(event)=>this.handleEditchange(event)}
                  /></span>
                  :
                  <span> {index +1} - {item.title}
                  </span>}
                  </>
            }
                  <button className="edit" onClick={() => this.handleEditTodo(item)}>
                    
                    {isEmptyOjb === false && editTodo.id === item.id?
                    'Save'  : 'edit'} 
                  
                    </button>
                  <button className="delete" onClick={() => this.handledeleteTodo(item)}>delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListToDoapp;
