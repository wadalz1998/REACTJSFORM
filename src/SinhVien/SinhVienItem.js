import React, { Component } from "react";

class SinhVienItem extends Component {
  render() {
    const { sinhvien, deleteSinhVien, handleEditSV } = this.props;
    return (
      <tr>
        <td>{sinhvien.maSV}</td>
        <td>{sinhvien.fullname}</td>
        <td>{sinhvien.phonename}</td>
        <td>{sinhvien.email}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelTitleId"
            onClick={()=>handleEditSV(sinhvien.id,sinhvien)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={deleteSinhVien.bind(this, sinhvien.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default SinhVienItem;
