import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog1", body: "body1", author: "mario", id: 1 },
    { title: "blog2", body: "body2", author: "yoshi", id: 3 },
    { title: "blog3", body: "body3", author: "luigi", id: 3 },
    { title: "blog4", body: "body4", author: "mario", id: 4 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList
        blogs={blogs.filter(blog => blog.author === "mario")}
        title="Mario's blogs"
      />
    </div>
  );
};

export default Home;
