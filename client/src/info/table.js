import React from 'react'

const InfoTable = (props) => {
  return (
    <table className='table table-dark'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Fees</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {props.getdata.length > 0 ?
            ((props.getdata.map((e) => (
                <tr key={e._id}>
                    <td>{e.Name}</td>
                    <td>{e.Course}</td>
                    <td>{e.Email}</td>
                    <td>{e.Phone}</td>
                    <td>{e.Fees}</td>
                    <td><button className="btn btn-success" onClick={() => {props.setdata(e)}}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={() => {props.deletedata(e)}}>Delete</button></td>
                </tr>))
            )): <tr>No data</tr>}
        </tbody>
    </table>
  )
}

export default InfoTable;
