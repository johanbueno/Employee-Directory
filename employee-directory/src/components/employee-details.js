import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

function Employeedetail(props) {
  return (

    <Container>
      <Row>
        <Col size="md-12">
          <Row>
            <Col size="md-2">
              First test Name : {this.props.FirstName}
            </Col>
            <Col size="md-2">

            </Col>
            <Col size="md-2"></Col>
            <Col size="md-2"></Col>
            <Col size="md-2"></Col>
            <Col size="md-2"></Col>
          </Row>

        </Col>

      </Row>

    </Container>



  );
}

export default Employeedetail;