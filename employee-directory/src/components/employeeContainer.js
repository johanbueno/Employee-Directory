
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Employeedetail from "./employee-details";

// sencond option
// //////////////////////

import React, { Component } from "react";


class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {},
      error: null

    };
  }

  buildList = (data) => {
    console.log('show me this', data)
    this.setState({ list: data.results })
  }

  componentDidMount() {
    console.log('did Mount')
    fetch("https://randomuser.me/api/?results=50&nat=us")
      .then(response => response.json())
      .then(this.buildList)
      .catch(error => {
        this.setState({ error });
      })

  }

  render() {
    console.log('render')
    return (
      <Container>
        <Row>
          <Col size="md-12">

            

            <ul>
              {
                this.state.list.length === 0 &&
                <li>Sorry No Employees</li>
              }
              {this.state.list.length > 0 &&
                this.state.list.map((employee) => (

                  <li key={employee.id.value} id={employee.id.value}>
                    <Employeedetail>
                    FirstName={employee.name.first}
                    MiddleName={employee.name.last}
                    Email ={employee.email}
                    pictureSrc = {employee.picture.thumbnail}


                    </Employeedetail>
                    
                    {employee.gender}
                    

                  </li>
                ))
              }
            </ul>
            {!this.state.error &&
              <h3>{this.state.error}</h3>
            }
            <Row>
              <Col size="md-2">
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Employee