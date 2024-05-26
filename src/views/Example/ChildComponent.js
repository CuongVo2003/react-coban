import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowhide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  handleOnDelete = (jobs) => {
    console.log(">>>checkdelete", jobs);
    this.props.deleteJob(jobs);
  };
  render() {
    console.log(">>check props: ", this.props);
    let { name, age, job } = this.props;
    let { showJob } = this.state;
    let check = showJob === false ? "showJob = true " : "showJob = false";
    return (
      /*
            Render() => return
           Cách 1:  Chỉ sử dụng 1 khối không thể sử dụng nhiều khối div riêng biệt
            Cách 2: có thể sử dụng thẻ React.Fragment để JS hiểu cần in ra 2 khối riêng biệt
            Cách 3: sử dụng 1 lớp socket <> </>
            Stage là dữ liệu có thể thay đổi và có thể update lại real time
            State = object
        */

      <div>
        <span>Ngành nghề</span>
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowhide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="arrjob-list">
              {job.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.total}{" "}
                    <span onClick={() => this.handleOnDelete(item)}>X</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowhide()}>hide</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ChildComponent;
