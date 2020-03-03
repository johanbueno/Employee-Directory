import React from "react";

function employeeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.picture.thumbnail} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
  <h3>Name: {props.name.first}+ {""}+{props.name.last}</h3>
      <h3>Gender: {props.gender}</h3>
      <h3>Location: {props.location.stret}</h3>
    </div>
  );
}

export default employeeDetail;