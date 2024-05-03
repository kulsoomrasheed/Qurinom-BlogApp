import axios from "axios";
import { GET_BLOG_SUCCESS, POST_BLOG_SUCCESS, BLOG_FAILURE, BLOG_PENDING } from "./actionTypes";

export const getBlogs=(dispatch)=>{
  
  const token= localStorage.getItem('token')
  console.log(token,'line5');
    dispatch({type: BLOG_PENDING})
    axios.get("https://qurinom-be.onrender.com/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        dispatch({type:GET_BLOG_SUCCESS,payload:res.data.blogs})
        console.log(res.data.blogs);

    }).catch((err)=>{
        dispatch({type:BLOG_FAILURE})
        console.log(err.message);
    })
}

export const postBlogs=(obj)=>(dispatch)=>{
  
  const token= localStorage.getItem('token')
    dispatch({type: BLOG_PENDING})
console.log(token,'lin24');
    axios
    .post("https://qurinom-be.onrender.com/blogs", obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {

      console.log(res.data);
      dispatch({type:POST_BLOG_SUCCESS})

    })
    .catch((err) => {
      console.log(err.message);
      dispatch({type:BLOG_FAILURE})

    });
}

export const deleteBlog=(_id)=>(dispatch)=>{
  
  const token= localStorage.getItem('token')
  dispatch({type:BLOG_PENDING})
  axios.delete(`https://qurinom-be.onrender.com/blogs/delete/${_id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  }).then((res)=>{
    console.log(res.data);
    dispatch({type:POST_BLOG_SUCCESS})
    dispatch(getBlogs)

  }).catch((err)=>{
    console.log(err.message);
    dispatch({type:BLOG_FAILURE})
    alert("You cannot delete someone else's blog")

  })
}

export const handlePatch = (id, obj)=>(dispatch) => {
  const token= localStorage.getItem('token')

  dispatch({type: BLOG_PENDING})
  axios
    .patch(
      `https://qurinom-be.onrender.com/blogs/edit/${id}`,
      obj,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({type:POST_BLOG_SUCCESS})
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({type:BLOG_FAILURE})
      alert("You cannot edit someone else's blog")

    });
};
