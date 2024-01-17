import React from 'react';
import './Styles/CreatorComp.css'
import { useNavigate } from 'react-router-dom';

function CreatorComp({Role,SetRole,SetBooks,Token}) {
    let navigate = useNavigate();
    let handlefilter = (e) => {
        let selected_filter = e.target.value;
        fetch(`https://mysticbooks.onrender.com/books?${selected_filter}`,{
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            SetBooks(response.Books);
        }).catch((error)=>{
            alert('Please try again')
            // console.log(error);
        })
    }
    return (
        <div className='creator_main'>
            <select className='role_selector' value={Role} onChange={(event)=>{
                SetRole(event.target.value)
            }}>
                <option value="CREATOR">Creator</option>
                <option value="VIEWER">Viewer</option>
            </select>
            {
                Role === 'CREATOR' ? <div>
                <select className='book_time_sele' onChange={handlefilter}>
                    <option value="">Select</option>
                    <option value="Old=1">Old</option>
                    <option value="New=1">New</option>
                </select>
                <button className='add_book_btn' onClick={()=>{
                    navigate('/addbook')
                }}>Add Book</button>
                </div> : <></>
            }
            
        </div>
    );
}

export default CreatorComp;