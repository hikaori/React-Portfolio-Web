import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Container.scss";
export default class Container extends Component {
  render() {
    const { children } = this.props;
    return <div className="Container">{children}</div>;
  }
}

Container.propYypes = {
  children: PropTypes.object
};
Container.defaultProps = {
  children: {}
};
