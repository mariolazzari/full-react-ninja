import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog1", body: "body1", author: "mario", id: 1 },
    { title: "blog2", body: "body2", author: "yoshi", id: 2 },
    { title: "blog3", body: "body3", author: "luigi", id: 3 },
    { title: "blog4", body: "body4", author: "mario", id: 4 },
  ]);
  const [name, setName] = useState("mario");

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect runs");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
