import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    setUser(userData);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard user={user} onLogout={handleLogout} />
          </Route>
          {/* <Route path="/dashboard/add-fingerprint">
            <AddFingerprint />
          </Route>
          <Route path="/dashboard/view-history">
            <ViewHistory />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
