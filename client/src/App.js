import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Trade from "./components/trade/Trade";
import Navbar from "./components/layout/Navbar";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/trade" component={Trade} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
