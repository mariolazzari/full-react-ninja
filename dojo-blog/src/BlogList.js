import React from "react";
import PropTypes from "prop-types";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blogPreview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

BlogList.propTypes = {};

export default BlogList;
