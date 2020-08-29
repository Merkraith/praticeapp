import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Routing from './pages/Routing.js';
// import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import DeveloperGallery from "./pages/DeveloperGallery";
import EditProfile from "./pages/EditProfile";



function App() {
  return (
    <Router>
    <div>
      <Dashboard/>
      <Switch>
      {/* <Route exact path="/" component={Dashboard} /> */}
      <Route exact path="/pages/DeveloperGallery" component={DeveloperGallery} />
      <Route exact path="/pages/EditProfile" component={EditProfile} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
