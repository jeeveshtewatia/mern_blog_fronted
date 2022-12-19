import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    img: "",
    Description: "",
    category: "",
  });

  const handelInputchange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  //Creating a new  blog
  const createBlog = async (e) => {
    e.preventDefault();
    try {
      console.log(blog);
      console.log("creation started");
      const data = await axios.post(
        "https://mongodb-reactblogproject.vercel.app/api/blog",
        blog
      );
      console.log(data);
      setBlog({ ...blog, title: "", img: "", Description: "" });
      toast.success("Blog added successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="addblog">
      <h1>Add New Blog Here</h1>
      <Form onSubmit={createBlog}>
        <Form.Label htmlFor="title">Title :</Form.Label>
        <Form.Control
          type="text"
          id="title"
          name="title"
          value={blog.title}
          placeholder="Enter title of blog..."
          onChange={handelInputchange}
          required
        />
        <Form.Label htmlFor="img">Image Source :</Form.Label>
        <Form.Control
          type="text"
          id="img"
          name="img"
          value={blog.img}
          placeholder="Enter source of image..."
          onChange={handelInputchange}
          required
        />
        <Form.Label htmlFor="Description">Description :</Form.Label>
        <Form.Control
          type="text"
          id="Description"
          name="Description"
          value={blog.Description}
          placeholder="Enter description of blog..."
          onChange={handelInputchange}
        />
        <Form.Label htmlFor="category">Choose a category :</Form.Label>

        <Form.Select
          aria-label="Default select example"
          name="category"
          id="category"
          onChange={handelInputchange}
          className="mb-3"
        >
          <option>Open this select menu</option>
          <option value="Bollywood">Bollywood</option>
          <option value="Hollywood">Hollywood</option>
          <option value="Technology">Technology</option>
          <option value="Food">Food</option>
          <option value="Fitness">Fitness</option>
        </Form.Select>
        <div className="d-grid">
          <Button className="btnblog" variant="primary" type="onsubmit">
            Submit Details
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddBlog;
