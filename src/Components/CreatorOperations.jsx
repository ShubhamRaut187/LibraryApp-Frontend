import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function CreatorOperations({id}) {
    let Token = useSelector((store)=>{
        return store.User.Token
    })
    let Navigate = useNavigate();
    let DeleteBook = () =>{
        fetch(`https://mysticbooks.onrender.com/books/delete/${id}`,{
            method:'DELETE',
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            if(response.Message === 'Book deleted'){
                alert(response.Message);
                window.location.reload();   
            }
            else{
                alert(response.Message)
            }
            
        }).catch((error)=>{
            console.log(error);
            alert('Please try again')
        })
    }
    return (
        <td>
            <button onClick={()=>{
                Navigate(`/update/${id}`)
            }}>Update</button>
            <button onClick={()=>{
                if(window.confirm('Are you sure to delete this book ?')){
                    DeleteBook();
                }
            }}>Delete</button>
        </td>
    );
}

export default CreatorOperations;