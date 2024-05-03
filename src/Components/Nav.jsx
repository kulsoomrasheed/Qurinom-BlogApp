import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
 let auth=localStorage.getItem("token") && true
const username= localStorage.getItem("username")
console.log(username);
  const id = localStorage.getItem("user");
  return (
    <div
      className="flex w-full justify-between border border-pink-200 rounded-xl align-middle items-center mx-auto py-3 px-7"
      style={{ backgroundColor: "#071a2a", color: "white" }}
    >
      {" "}
      <Link to={"/"}>
        <div className="flex justify-between align-middle items-center">
          <img className="w-20" src="logo.png" alt="" />
          <h1 className="text-3xl font-abc">BlogVibe</h1>
        </div>
      </Link>
      <div className="flex gap-12">
        {" "}
        <Link to={'/bloglist'}><h4 className="">Blogs</h4></Link>
        <h4 className="">About Us</h4>
        <Link to={'/addBlog'}><h4 className="">Add a Blog</h4></Link>
        <h4 className="">FAQs</h4>
      </div>
      <div className="flex gap-10 items-center">
        {" "}
        {auth ? (
          <Link to={`/profile/${id}`}>{username}</Link>
        ) : (
          <Link to={"/"}>Login</Link>
        )}
        {auth ? (
          <button
            onClick={() => localStorage.clear()}
            className="p-2 rounded-md"
            style={{ backgroundColor: "rgb(234,60,150)", color: "white" }}
          >
            <Link to={"/"}>Logout</Link>
          </button>
        ) : (
          <button
            className="p-2 rounded-md"
            style={{ backgroundColor: "rgb(234,60,150)", color: "white" }}
          >
            {" "}
            <Link to={"/signup"}>Try for Free</Link>{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(Nav);
