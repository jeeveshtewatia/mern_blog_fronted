import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

// import { useState } from "react";

const Articles = (props) => {
  // console.log("Blog data comming", props.blog);
  // const [blogData, setBlogData] = useState({
  //   title: "",
  //   img: "",
  //   Description: "",
  //   category: "",
  // });
  //deleting a blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(
        `https://mongodb-reactblogproject.vercel.app/api/blog/${id}`
      );
      toast.success("Successfully Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //====get single blog================
  // const getBlog = (blog) => {
  // setFormData({ name: blog.name, completed: false });
  // console.log(blog.title);
  // setBlogData({
  //   title: blog.title,
  //   img: blog.img,
  //   Description: blog.Description,
  //   category: blog.category,
  // });
  // setTaskID(task._id);

  return (
    <>
      <div className="artflexparent">
        <NavLink
          state={{
            title: props.title,
            img: props.img,
            description: props.pera,

            Date: props.date,
            index: props.index,
            category: props.category,
          }}
          to={`/category/${props.category}/${props.index}`}
          // to="/Blog"
        >
          <div className="artflex" key={props.index}>
            <div className="linkImage">
              <img src={props.img} alt="Some information" />
            </div>
            <div>
              <h3 className="animate__animated animate__bounce">
                {props.title}
              </h3>
              <p>{props.pera}</p>
              <h5>{`${props.category} / ${props.date}`}</h5>
              <div>
                {/* <button onClick={() => getBlog(props.blog)}>Edit</button> */}
              </div>
            </div>
          </div>
        </NavLink>
        <Button
          className="delete"
          variant="danger"
          onClick={() => deleteBlog(props.blog._id)}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Articles;
