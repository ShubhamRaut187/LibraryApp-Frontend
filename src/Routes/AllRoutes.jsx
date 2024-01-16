import React from 'react';
import { Route,Routes } from 'react-router-dom';

//Pages 
import Home from '../Pages/Home'
import Books from '../Pages/Books'
import SignupLogin from '../Pages/SignupLogin'


function AllRoutes(props) {
    return (
        <div>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/books' element={<Books/>}/>
               <Route path='/signuplogin' element={<SignupLogin/>}/>
            </Routes>
        </div>
    );
}

export default AllRoutes;