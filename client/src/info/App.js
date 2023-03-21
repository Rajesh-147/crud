import React from "react";
import InfoForm from "./form";
import InfoTable from "./table";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);

  const create = (data) => {
    if (data.IsEdit === false) {
      axios
        .post("http://localhost:5000/info/createStudent", data)
        .then((response) => {
          console.log(response.data);
          getAll();
        });
    } else {
      axios
        .put("http://localhost:5000/info/updateStudent", data)
        .then((response) => {
          console.log(response.data);
          getAll();
        });
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    axios.get("http://localhost:5000/info/getStudent").then((response) => {
      setData(response.data);
    });
  };

  const update = (data) => {
    setEditData(data);
  };

  const del = (data) => {
    axios
      .delete(`http://localhost:5000/info/deleteStudent/${data._id}`)
      .then((res) => {
        console.log("data deleted");
        getAll();
      });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <InfoForm mydata={create} setForm={editData} />
        </div>
        <div className="col-9">
          <InfoTable getdata={data} setdata={update} deletedata={del} />
        </div>
      </div>
    </div>
  );
}

export default App;
