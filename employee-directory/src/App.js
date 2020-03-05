import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
// import EmployeeContainer from "./components/employeeContainer";
import Employess from "./components/employeeContainer";

function App() {
  return (
   
    <div>
      <Navbar />
      <Wrapper>
      <Card />
      <Employess />
      </Wrapper>
    </div>

  );
}
 
export default App;
