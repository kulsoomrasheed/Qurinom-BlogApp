import React from 'react'
import { GET_BLOG_SUCCESS, POST_BLOG_SUCCESS, BLOG_FAILURE, BLOG_PENDING } from './actionTypes'

const initState={
    loading:false,
    err:false,
   blogs:[]
   
  }

export const reducer = (state=initState,{type,payload}) => {
  switch(type){
    case BLOG_PENDING:return {...state, loading:true,err:false}
    case POST_BLOG_SUCCESS:return {...state,loading:false,err:false}
    case GET_BLOG_SUCCESS:return {...state,loading:false,err:false,blogs:payload}
    case BLOG_FAILURE:return {...state,loading:false,err:true}


    default:return state
  }
}
