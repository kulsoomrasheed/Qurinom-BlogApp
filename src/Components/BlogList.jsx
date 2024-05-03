import React, { useEffect } from 'react'
import { getBlogs } from '../redux/blogsReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import Blog from '../Components/Blog';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav';

const BlogList = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {blogs}=useSelector((store)=>store.blogsReducer)
    useEffect(()=>{
   dispatch(getBlogs)
    },[])
  return   (
    <div><Nav/><div style={{ backgroundColor: '#01111d' }} className='container mx-auto p-4 '>
        
       <button onClick={()=>navigate("/addBlog")} className=" bg-pink-600 text-white  p-3 m-3 rounded-lg">
          Add a Blog</button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {blogs && blogs.map((blog, index) => (
        
        <Blog 
          key={index}
          _id={blog._id}
          username={blog.username} 
          title={blog.title} 
          desc={blog.desc} 
          createdAt={blog.createdAt} 
          
        />
      ))}
    </div>
  </div>

    </div>
    
      );

};


export default BlogList