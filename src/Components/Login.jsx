import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authReducer/action";
import Nav from "./Nav";

const Login = () => {
  const [username, setname] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleclick = async (e) => {
    e.preventDefault();

    const obj = {
      username,
      pass,
    };

    try {
      const response = await dispatch(login(obj));
      setname("");
      setpass("");

      if (response) {
        navigate("/bloglist");
        alert("Login Successfull!");
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("User not found");
    }
  };

  return (
    <div>
      <Nav />
      <h1
        className="text-white text-2xl pt-6 "
        style={{ backgroundColor: "#01111d" }}
      >
        {" "}
        Login to see Blogs from your friends.✨
      </h1>

      <div style={{ backgroundColor: "#01111d" }} className="py-24  ">
        <form
          style={{ backgroundColor: "#071a2a" }}
          className="w-1/2 border border-pink-200  mx-auto flex flex-col p-8 rounded-lg"
          action=""
          onSubmit={handleclick}
        >
          <label className="mb-2  text-white text-2xl">Username</label>
          <input
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => setname(e.target.value)}
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <label className="mb-2  text-white text-2xl">Password</label>
          <input
            type="password"
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter Password..."
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            style={{ backgroundColor: "#071a2a", color: "white" }}
            type="submit"
            placeholder="Login"
            className="mb-4 py-2 px-4 rounded-lg  border border-pink-200 focus:outline-none focus:border-blue-500"
          />
          <h1 className="text-white">
            New User?{" "}
            <Link to={"/signup"} className="text-blue-400">
              Register
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
