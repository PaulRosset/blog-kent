import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Favicon from "../images/favicon.png";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Blog Kent University - Epitech 🤘</title>
      <meta
        name="description"
        content="Blog Kent University (French). Made by student for student."
      />
      <link rel="icon" type="image/png" href={Favicon} />
    </Helmet>
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
