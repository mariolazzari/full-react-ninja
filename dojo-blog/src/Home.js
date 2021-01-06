import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog1", body: "body1", author: "mario", id: 1 },
    { title: "blog2", body: "body2", author: "yoshi", id: 2 },
    { title: "blog3", body: "body3", author: "luigi", id: 3 },
    { title: "blog4", body: "body4", author: "mario", id: 4 },
  ]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {}, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
