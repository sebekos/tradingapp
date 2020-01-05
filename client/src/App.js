import React, { useEffect, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './redux/actions/auth';
import PrivateRoute from './components/routing/PrivateRoute';

import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Trade from "./components/trade/Trade";
import Navbar from "./components/layout/Navbar";
import OAuth from "./components/oauth/OAuth";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/trade" component={Trade} />
                    <PrivateRoute excat path="/oauth" component={OAuth} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
