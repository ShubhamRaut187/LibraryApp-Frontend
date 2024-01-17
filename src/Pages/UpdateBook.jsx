import React,{useState,useEffect} from 'react';
import PageTitle from '../Components/PageTitle';
import { useParams,useNavigate } from 'react-router-dom';
import LoadingComp from '../Components/LoadingComp';
import { useSelector } from 'react-redux';

import './Styles/UpdateBook.css'
function UpdateBook(props) {
    let {id} = useParams();
    let [Loading,SetLoading] = useState(false);
    let [Item,SetItem] = useState({
        Title:'',
        Author:'',
        Category:''
    });
    let Navigate = useNavigate();
    let Token = useSelector((store)=>{
        return store.User.Token
    })

    let editbook = (e)=>{
        e.preventDefault();
        SetLoading(true)
        fetch(`https://mysticbooks.onrender.com/books/update/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                'authorization':`Bearer ${Token}`
            },
            body:JSON.stringify(Item)
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            if(response.Message === 'Book updated'){
                alert(response.Message);
                Navigate('/books');
                SetLoading(false);
            }
            else{
                alert(response.Message);
                SetLoading(false)
            }
        }).catch((error)=>{
            alert('Please try again')
            console.log(error);
        })
    }


    useEffect(()=>{
        fetch(`https://mysticbooks.onrender.com/books/singlebook/${id}`,{
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            SetItem({
                Title:response.Book.Title,
                Author:response.Book.Author,
                Category:response.Book.Category
            })
        }).catch((error)=>{
            alert('Please try again')
            // console.log(error);
        })
    },[id])

    return (
        <div>
            <PageTitle Title={'Update Book'}/>
            <div className='updateform_main'>
             <div className='update_message_div'>
                <h1>Update a book !</h1>
                {/* <p>Welcome to Mystic Books! We are delighted to have you join our community. Your decision to sign up marks the beginning of a streamlined and effortless experience. As you embark on this journey with Mystic Books, we're here to empower and assist you every step of the way. Your account awaits – let's create something amazing together!</p> */}
            </div>
            <div className='update_form_div'>
                <h2>Edit Book Information</h2>
                <p>A book should have title, author, category.</p>
                {
                    Loading ? <LoadingComp Text={'Updating book...'}/> : <form className='update_form' onSubmit={editbook}>
                    <label>Title *</label>
                    <input type="text" className='update_form_input' placeholder='Title' value={Item.Title} onChange={(e)=>{
                        SetItem((prevItem)=>({...prevItem, Title:e.target.value}))
                    }}/>
                    <label>Author *</label>
                    <input className='update_form_input' type="text" value={Item.Author} placeholder='Author'onChange={(e)=>{
                        SetItem({...Item, Author:e.target.value})
                    }}/>
                    <label>Category *</label>
                    <input className='update_form_input' type="text" placeholder='Category' value={Item.Category} onChange={(e)=>{
                        SetItem({...Item, Category:e.target.value})
                    }}/>
                    
                    <input className='update_form_submit_btn' type="submit" value='Update Book'/>
                </form>
                }
                
            </div>
        </div>
        </div>
    );
}

export default UpdateBook;