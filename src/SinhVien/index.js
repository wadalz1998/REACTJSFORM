import React, { Component } from "react";
// import Search from "./Search";
import SinhVien from "./SinhVien";
import ModalEdit from "./Modal";
import data from "./data.json";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sinhvien: data,
      newSinhVien: {
        id: "",
        maSV: "",
        fullname: "",
        phonename: "",
        email: "",
      },
      openModal: false,
      defaultValue: "",
    };
  }
  onCloseModal = () => {
    this.setState({ openModal: false });
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      newSinhVien: {
        ...this.state.newSinhVien,
        [name]: value,
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const temp = { ...this.state.newSinhVien, id: date.getTime() };
    const sinhVienClone = [...this.state.sinhvien, temp];
    this.setState(
      {
        sinhvien: sinhVienClone,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleDelete = (id) => {
    const sinhVienAfter = this.state.sinhvien.filter(
      (sinhvien) => sinhvien.id !== id
    );
    this.setState({
      sinhvien: sinhVienAfter,
    });
  };
  handleEditSV = (id, sinhvien) => {
    this.setState({
      defaultValue: sinhvien,

      openModal: true,
    });
  };
  handleOnChangeEdit = (e) => {
    const { name, value } = e.target;
    this.setState({
      defaultValue: {
        ...this.state.defaultValue,
        [name]: value,
      },
    });
  };
  handleSubmitEdit = (event) => {
    event.preventDefault();
    // const index = this.state.sinhvien.findIndex(
    //   (item) => item.id === this.state.defaultValue.id
    // );
    // const cloneTemp = [...this.state.sinhvien];

    // if (index !== -1) {
    //   cloneTemp[index] = this.state.defaultValue;
    // }
    // this.setState({
    //   sinhvien: cloneTemp,
    // });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-start my-3 text-white bg-dark">
          Thông Tin Sinh Viên
        </h1>
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="form-group col-6">
            <label className="text-start w-100">Mã Sinh viên</label> <br />
            <input
              className="form-control w-100"
              name="maSV"
              onChange={this.handleOnChange}
            ></input>
          </div>
          <div className="form-group col-6">
            <label className="text-start w-100">Họ Tên</label> <br />
            <input
              className="form-control w-100"
              name="fullname"
              onChange={this.handleOnChange}
            ></input>
          </div>
          <div className="form-group col-6">
            <label className="text-start w-100">Số điện thoại</label> <br />
            <input
              className="form-control w-100"
              name="phonename"
              onChange={this.handleOnChange}
            ></input>
          </div>
          <div className="form-group col-6">
            <label className="text-start w-100">Email</label> <br />
            <input
              className="form-control w-100"
              name="email"
              onChange={this.handleOnChange}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-success text-start"
            style={{ margin: "10px", width: "150px" }}
          >
            Thêm Sinh Viên
          </button>
        </form>
        <SinhVien
          sinhvien={this.state.sinhvien}
          deleteSinhVien={this.handleDelete}
          handleEditSV={this.handleEditSV}
        />
        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
          <div>
            <h2>Thông Tin Sinh Viên</h2>
            <div className="">
              <form onSubmit={this.handleSubmitEdit}>
                <div className="form-group" onSubmit={this.handleSubmitEdit}>
                  <label className="text-start w-100">Mã Sinh viên</label>{" "}
                  <br />
                  <input
                    type="text"
                    className="form-control w-100"
                    name="maSV"
                    value={this.state.defaultValue.maSV}
                    onChange={this.handleOnChangeEdit}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-start w-100">Họ Tên</label> <br />
                  <input
                    className="form-control w-100"
                    name="fullname"
                    onChange={this.handleOnChangeEdit}
                    value={this.state.defaultValue.fullname}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-start w-100">Số điện thoại</label>{" "}
                  <br />
                  <input
                    className="form-control w-100"
                    name="phonename"
                    onChange={this.handleOnChangeEdit}
                    value={this.state.defaultValue.phonename}
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-start w-100">Email</label> <br />
                  <input
                    className="form-control w-100"
                    name="email"
                    onChange={this.handleOnChangeEdit}
                    value={this.state.defaultValue.email}
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
          {/* <ModalEdit editSinhVien={this.state.editSinhVien} /> */}
        </Modal>
      </div>
    );
  }
}

export default Home;
