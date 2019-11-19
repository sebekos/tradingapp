import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Trade from "./components/trade/Trade";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/trade" component={Trade} />
            </Switch>
        </Router>
    );
};

export default App;
