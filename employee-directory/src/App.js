import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

function App() {
  return (
   
    <Router>
    <div>
      <Navbar />
      <Wrapper>

        <Route exact path="/search" component={Search} />
      </Wrapper>
    </div>
  </Router>
  );
}
 
export default App;
