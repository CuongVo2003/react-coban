import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./Addcomponent";
class MyComponent extends React.Component {
  state = {
    arrjob: [
      {
        id: "001",
        title: "dev",
        total: "50000",
      },
      {
        id: "002",
        title: "deve",
        total: "500",
      },
      {
        id: "003",
        title: "service",
        total: "1000",
      },
    ],
  };
  addnewJob = (job) => {
    this.setState({
      arrjob: [...this.state.arrjob, job],
    });
    console.log("check addnew job", job);
  };
  deleteJob = (jobss) => {
    let currentjob = this.state.arrjob;
    currentjob = currentjob.filter((item) => item.id !== jobss.id);
    this.setState({
      arrjob: currentjob,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>run didupdate: ",
      "prev State: ",
      prevState,
      "current State: ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>> run component did mount");
  }
  render() {
    return (
      /*
            Render() => return
           Cách 1:  Chỉ sử dụng 1 khối không thể sử dụng nhiều khối div riêng biệt
            Cách 2: có thể sử dụng thẻ React.Fragment để JS hiểu cần in ra 2 khối riêng biệt
            Cách 3: sử dụng 1 lớp socket <> </>
            Stage là dữ liệu có thể thay đổi và có thể update lại real time
            State = object
        */

      <>
        <AddComponent addnewJob={this.addnewJob} />

        <ChildComponent
          name={this.state.firstName}
          age={this.state.secondName}
          job={this.state.arrjob}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
