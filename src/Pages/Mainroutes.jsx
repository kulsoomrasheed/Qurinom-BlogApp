import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Home from './Home'
import AddBlog from './AddBlog'
import EditBlog from './EditBlog'
import Private from './Private'


const MainRoutes = () => {
  return <Routes>
    <Route path='/bloglist' element={<Private><Home/></Private>}> </Route>
    <Route path='*' element={"404 Not Found!!!"}> </Route>
    <Route path='/' element={<Login/>}> </Route>
    <Route path='/signup' element={<Signup/>}> </Route>
    <Route path='/addBlog' element={<Private><AddBlog/></Private>}> </Route>

    <Route path='/edit/:id' element={<Private><EditBlog/></Private>}> </Route>

  </Routes>
}

export default MainRoutes