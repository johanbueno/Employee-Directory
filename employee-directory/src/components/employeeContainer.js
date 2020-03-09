import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import API from "./utils/API"
import Employeedetail from "./employeeDetails/employee-details";
import "../components/employeeDetails/style.css";
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


// sencond option
// //////////////////////


class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {},
      error: null,
      names: [],
      results: [],

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
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.RenderEmployees(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };


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
              <SearchForm
                      handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      name={this.state.name}
                    />
              {this.state.list.length > 0 &&
                this.state.list.map((employee) => (

                  <li key={employee.id.value} id={employee.id.value}>
                    <Employeedetail
                      FirstName={employee.name.first}
                      LastName={employee.name.last}
                      Email={employee.email}
                      pictureSrc={employee.picture.thumbnail}
                      gender={employee.gender}
                      location={employee.location.city}
                      DOB={employee.dob.date.toLocaleString().split(/\D/).slice(0, 3).map(num => num.padStart(2, "0")).join("-")}
                    />
                    
                    <SearchResults results={this.state.results} />
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