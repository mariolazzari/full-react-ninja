import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog1", body: "body1", author: "mario", id: 1 },
    { title: "blog2", body: "body2", author: "mario", id: 3 },
    { title: "blog3", body: "body3", author: "mario", id: 3 },
    { title: "blog4", body: "body4", author: "mario", id: 4 },
  ]);

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blogPreview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
