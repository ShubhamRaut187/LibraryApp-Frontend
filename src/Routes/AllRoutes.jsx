import React from 'react';
import { Route,Routes } from 'react-router-dom';

//Pages 
import Home from '../Pages/Home'
import Books from '../Pages/Books'
import SignupLogin from '../Pages/SignupLogin'
import AddBook from '../Pages/AddBook';
import UpdateBook from '../Pages/UpdateBook';
import ProtectedRoutes from './ProtectedRoutes';

function AllRoutes(props) {
    return (
        <div>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/books' element={<ProtectedRoutes><Books/></ProtectedRoutes>}/>
               <Route path='/signuplogin' element={<SignupLogin/>}/>
               <Route path='/update/:id' element={<ProtectedRoutes><UpdateBook/></ProtectedRoutes>}/>
               <Route path='/addbook' element={<ProtectedRoutes><AddBook/></ProtectedRoutes>}/> 
            </Routes>
        </div>
    );
}

export default AllRoutes;