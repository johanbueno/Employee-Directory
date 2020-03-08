import React from "react";
import Row from "../Row";
import Col from "../Col";
import Wrapper from "../Wrapper/index"
import "./style.css";
class Employeedetail extends React.Component {
  render() {
    return (

      <Wrapper>
      <Col size="md-12">
        <Row className="display">
          <Col  size="md-2">
            <img src={this.props.pictureSrc} alt={this.props.FirstName}></img>
          </Col>
          <Col  size="md-2"> {this.props.FirstName}</Col>
          <Col  size="md-2"> {this.props.LastName}</Col>
          <Col  size="md-2">{this.props.gender}</Col>
          <Col  size="md-2">{this.props.DOB}</Col>
          <Col  size="md-2">{this.props.Email} </Col>
        </Row>

      </Col>

      </Wrapper>
    );

  }

}

export default Employeedetail;