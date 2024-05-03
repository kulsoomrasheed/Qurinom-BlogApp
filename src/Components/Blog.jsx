import React from "react";
import { deleteBlog } from "../redux/blogsReducer/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Blog = ({ _id, username, title, desc, createdAt }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundColor: "#071a2a" }}
      className="text-white border border-pink-200 rounded-lg p-4 mb-4"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-200">{desc}</p>
      <p className="text-gray-300">Created at: {createdAt}</p>
      <p className="text-gray-300">By: {username}</p>
      <button
        onClick={() => dispatch(deleteBlog(_id))}
        className=" bg-pink-600 text-white  p-3 m-3 rounded-lg"
      >
        Delete
      </button>
      <button
        onClick={() => navigate(`/edit/${_id}`)}
        className=" bg-pink-600 text-white  p-3 m-3 rounded-lg"
      >
        Edit
      </button>{" "}
    </div>
  );
};

export default Blog;
