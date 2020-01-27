import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { loadUser } from "./redux/actions/auth";
import PrivateRoute from "./components/routing/PrivateRoute";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import OAuth from "./components/oauth/OAuth";
import Alert from "./components/layout/Alert";
import PaperTrade from "./components/papertrade/PaperTrade";
import LiveTrade from "./components/LiveTrade/LiveTrade";

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Alert />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/livetrade" component={LiveTrade} />
                    <PrivateRoute exact path="/papertrade" component={PaperTrade} />
                    <PrivateRoute excat path="/oauth" component={OAuth} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
