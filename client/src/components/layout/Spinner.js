import React, { Fragment } from "react";
import { connect } from "react-redux";
import spinner from "./spinner.gif";
import PropTypes from "prop-types";

const Spinner = ({ spinner: { loading } }) => (
    <Fragment>{loading ? <img className="spinner" src={spinner} alt="Loading..." /> : null}</Fragment>
);

Spinner.propTypes = {
    spinner: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    spinner: state.spinner
});

export default connect(mapStateToProps, null)(Spinner);
