import React from 'react';
import './Styles/CreatorComp.css'
function CreatorComp({Role,SetRole}) {
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
                <select className='book_time_sele'>
                    <option value="">Select</option>
                    <option value="Old=1">Old</option>
                    <option value="New=1">New</option>
                </select>
                <button className='add_book_btn'>Add Book</button>
                </div> : <></>
            }
            
        </div>
    );
}

export default CreatorComp;