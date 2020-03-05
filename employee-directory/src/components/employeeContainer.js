
import Container from "./Container";
import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import employeeDetail from "./employee-details";
// import API from "../utils/API";

// class EmployeeContainer extends Component {
//   state = {
//     result: {},
//     search: ""
//   };

//   // When this component mounts, search for the movie "The Matrix"
//   componentDidMount() {
//     this.searchEmployee("brad");
//   }

//   searchEmployee = query => {
//     API.search(query)
//       .then(res => this.setState({ result: res.data }))
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, search the OMDB API for the value of `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchEmployee(this.state.search);
//   };

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col size="md-12">
//             <Card
//               heading={this.state.result.name || "Search for a Employee to Begin"}
//             >
//               {this.state.result.name ? (
//                 <employeeDetail
//                   name={this.state.result.name.first}
//                   src={this.state.result.picture.thumbnail}
//                   gender={this.state.result.gender}
//                   location={this.state.result.location.city}
//                   email={this.state.result.email}
//                   phone= {this.state.result.phone}
//                   birthday = {this.state.result.dob}
//                 />
//               ) : (
//                 <h3>No Results to Display</h3>
//               )}
//             </Card>
//           </Col>
//           <Col size="md-4">
//             <Card heading="Search">
//               <SearchForm
//                 value={this.state.search}
//                 handleInputChange={this.handleInputChange}
//                 handleFormSubmit={this.handleFormSubmit}
//               />
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default EmployeeContainer ;

// sencond option
// //////////////////////

import React, { } from "react";



class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      list: ([])
    };
  }

  buildList = (data) => {
    console.log(data + "data")
    this.setState({list:data})
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50&nat=us")
      .then(res => res.json())
      .then(this.buildList)
      .catch()
      
  }

  render() {

    return (
      <Container>
        <Row>

      <div>
        <ul>
          {
            this.state.list.length === 0 && 
            <li>Sorry No Employees</li>
          }
        {this.state.list.length > 0 && 
        this.state.list.map ((employee)=>(

        <li key={employee.id.value} id={employee.id.value}>
          {employee.location+" "+employee.email }
        
        </li>
        ))
        }
        </ul>
        {!this.state.error &&
          <h3>{this.state.error}</h3>
        }
        
      </div>
      </Row>
      </Container>
    );
  }
}

export default Employee