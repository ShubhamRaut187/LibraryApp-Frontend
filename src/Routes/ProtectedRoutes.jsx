import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function ProtectedRoutes({children}) {
    let Status = useSelector((store)=>{
        return store.Status;
    })
    if(Status){
        return children;
    }
    else{
        return <Navigate to='/signuplogin'/>
    }
}

export default ProtectedRoutes;
