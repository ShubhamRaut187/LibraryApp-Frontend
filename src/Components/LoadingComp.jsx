import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Styles/LoadingComp.css'
function LoadingComp({Text}) {
    return (
        <div className='loading_main'>
            <CircularProgress/>
            <h1>{Text}</h1>
        </div>
    );
}

export default LoadingComp;