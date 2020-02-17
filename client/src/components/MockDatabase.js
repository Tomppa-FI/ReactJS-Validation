import React from "react";
import "./css/MockDatabase.css";

export default (props) => {
  let rows = [];
  for (const index in props.users) {
    rows.push(
      <>
        <tr>
          <th scope="row">{index}</th>
          <td>{props.users[index].username}</td>
          <td>{props.users[index].email}</td>
          <td>{props.users[index].password}</td>
          <td>{props.users[index].confirmPassword}</td>
        </tr>
      </>
    )
  }
  return (
    <div className="Table-container">
      <tabel class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Confirm Password</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </tabel>
    </div>
  )
}