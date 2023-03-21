import React from "react";
import { useState, useEffect } from "react";

const InfoForm = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fees, setFees] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const infoSubmit = () => {
    if (!isEdit) {
      const data = {
        Name: name,
        Course: course,
        Email: email,
        Phone: phone,
        Fees: fees,
        IsEdit: isEdit,
      };
      props.mydata(data);
    } else {
      const data = {
        _id: id,
        Name: name,
        Course: course,
        Email: email,
        Phone: phone,
        Fees: fees,
        IsEdit: isEdit,
      };
      props.mydata(data);
    }
  };

  useEffect(() => {
    console.log("Use effect");
    if (props.setForm._id != null) {
      setId(props.setForm._id);
      setName(props.setForm.Name);
      setCourse(props.setForm.Course);
      setEmail(props.setForm.Email);
      setPhone(props.setForm.Phone);
      setFees(props.setForm.Fees);
      setIsEdit(true);
    }
    
  },[props]);

  return (
    <form onSubmit={infoSubmit} className="form from-dark">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Course:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Course"
          name="Course"
          value={course}
          onChange={(event) => {
            setCourse(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
          name="Phone"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Fees:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Fees"
          name="Fees"
          value={fees}
          onChange={(event) => {
            setFees(event.target.value);
          }}
        />
      </div>

      <button className="btn btn-success" type="submit">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default InfoForm;
