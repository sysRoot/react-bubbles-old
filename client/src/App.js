import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage"
import Login from "./components/Login";
import { LoginContext } from "./Contexts/LoginContext";

import "./styles.scss";
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [colorList, setColorList] = useState([]);

  const [authenticated, setAuthenticated] = useState(false);

  const authenticatedToggle = () => setAuthenticated(true)

  return (
    <Router>
      <LoginContext.Provider value={{authenticated, authenticatedToggle}}>
        <div className="App">
          <Route exact path="/" render={props => <Login {...props} />} />
          <PrivateRoute path="/bubbles" component={BubblePage} />
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;
