import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const [name, setName] = useState("mario");
  const handleDelete = id => {};

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [name]);

  return (
    <div className="home">
      {blogs ? (
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
  );
};

export default Home;
