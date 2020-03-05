import React from "react";

function employeeDetail(props) {
  return (
    <div className="container">
      <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Name: {props.name}</h3>
      <h3>Gender: {props.gender}</h3>
      <h3>Location: {props.location}</h3>
      <h5>Email: {props.email} </h5>
      <h5>Phone: {props.phone}</h5>
      <h5>BirthDay: {props.dob}</h5>
    </div>
  );
}

export default employeeDetail;