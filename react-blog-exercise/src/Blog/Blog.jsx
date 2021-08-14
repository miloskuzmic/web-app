import React from "react";
import "./Blog.css";
import PropTypes from "prop-types";

export const Blog = ({ title = "Title 1", post = "Neki post ovde" }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{post}</p>
  </div>
);

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};
