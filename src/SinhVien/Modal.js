import React, { Component } from "react";

class ModalEdit extends Component {
  handleOnChangeEdit = (e) => {
    const { name, value } = e.target;
    console.log(name);
  };
  handleSubmitEdit = (event) => {
    event.preventDefault();
  };

  render() {
    const { editSinhVien } = this.props;
    return (
      <div>
        <h2>Thông Tin Sinh Viên</h2>
        <div className="">
          <form onSubmit={this.handleSubmitEdit}>
            <div className="form-group" onSubmit={this.handleSubmitEdit}>
              <label className="text-start w-100">Mã Sinh viên</label> <br />
              <input
                type="text"
                className="form-control w-100"
                name="id"
                onChange={this.handleOnChangeEdit}
              ></input>
            </div>
            <div className="form-group">
              <label className="text-start w-100">Họ Tên</label> <br />
              <input
                className="form-control w-100"
                name="fullname"
                onChange={this.handleOnChangeEdit}
                value={editSinhVien.fullname}
              ></input>
            </div>
            <div className="form-group">
              <label className="text-start w-100">Số điện thoại</label> <br />
              <input
                className="form-control w-100"
                name="phonename"
                onChange={this.handleOnChangeEdit}
                value={editSinhVien.phonename}
              ></input>
            </div>
            <div className="form-group">
              <label className="text-start w-100">Email</label> <br />
              <input
                className="form-control w-100"
                name="email"
                onChange={this.handleOnChangeEdit}
                value={editSinhVien.email}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-success text-start"
              style={{ margin: "10px", width: "150px" }}
            >
              Edit Sinh Viên
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ModalEdit;
