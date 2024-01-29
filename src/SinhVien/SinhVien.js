import React, { Component } from "react";
import SinhVienItem from "./SinhVienItem";
// import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
class SinhVien extends Component {
  renderSinhvien = () => {
    const { sinhvien, deleteSinhVien,handleEditSV } = this.props;
    return sinhvien.map((item) => {
      return (
        <SinhVienItem
          key={item.id}
          deleteSinhVien={deleteSinhVien}
          handleEditSV={handleEditSV}
          sinhvien={item}
        ></SinhVienItem>
      );
    });
  };
  render() {
    const divStyle = {
      backgroundColor: "#212529",
      color: "white",
      // width:"100%",
    };
    return (
      <div>
        <table className="table">
          <thead style={{ width: "100%" }}>
            <tr style={divStyle}>
              <th style={divStyle}>Mã SV</th>
              <th style={divStyle}>Họ Tên</th>
              <th style={divStyle}>Số Điện Thoại</th>
              <th style={divStyle}>Email</th>
              <th style={divStyle}>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {/* <div className="d-flex align-items-center">
              <Search />
              <button
                className="btn btn-success"
                data-toggle="modal"
                data-target="#modelIdUser"
              >
                Add User
              </button>
            </div> */}
            {this.renderSinhvien()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SinhVien;
