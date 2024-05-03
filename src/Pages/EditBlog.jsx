import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogs, handlePatch, postBlogs } from '../redux/blogsReducer/action';
import Nav from '../Components/Nav';

const EditBlog = () => {
    
    const [title, setTitle] = useState("");
      const [desc, setDesc] = useState("");
      const dispatch=useDispatch()
      const navigate = useNavigate()
     const {id}=useParams()
      const obj={title,desc}
      const handleUpdateTodo=()=>{
        dispatch(handlePatch(id,obj));
        alert("A blog has been updated successfully")
        navigate("/bloglist")
        dispatch(getBlogs)
        setDesc("")
        setTitle("")
      }
  
  
  return (
    <div         style={{ backgroundColor: "#01111d" }}
    ><Nav/>
      <div
        style={{ backgroundColor: "#01111d" }}
        className=" mx-auto w-96 gap-1 flex flex-col p-8 rounded-lg"
      >
          <label className=" text-white ">Title</label>

        <input 
          className="border border-pink-300 focus:outline-none text-black"
          type="text"
          name="Enter Title"
          id=""
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
          <label className=" text-white">Description</label>

        <input
          className="border  border-pink-300 focus:outline-none text-black"
          type="text"
          name="Enter Title"
          id=""
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleUpdateTodo} className=" bg-pink-600 text-white  my-3">
          Add
        </button>
      </div>
      </div>
  )
}

export default EditBlog