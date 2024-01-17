import React,{useState} from 'react';
import LoadingComp from '../Components/LoadingComp'
import PageTitle from '../Components/PageTitle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Styles/AddBook.css'
function AddBook(props) {
    let [Title,SetTitle] = useState('');
    let [Author,SetAuthor] = useState('');
    let [Category,SetCategory] = useState('');
    let [Loading,SetLoading] = useState(false);
    let navigate = useNavigate();
    let UserId = useSelector((store)=>{
        return store.User.User.ID
    })
    let Token = useSelector((store)=>{
        return store.User.Token
    })
    let createBook = (e) =>{
        e.preventDefault();
        if(!Title || !Author || !Category){
            return alert('All fields are mandatory.')
        }
        SetLoading(true);
        fetch('https://mysticbooks.onrender.com/books',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'authorization':`Bearer ${Token}`
            },
            body:JSON.stringify({
                Title,
                Author,
                Category,
                CreatorID:UserId
            })
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            if(response.Message === 'Book added successfully.'){
                alert(response.Message);
                SetLoading(false);
                navigate('/books')
            }
            else{
                alert(response.Message);
                SetLoading(false)
            }
        }).catch((error)=>{
            SetLoading(false)
            // console.log(error);
        })
    }
    return (
        <div>
            <PageTitle Title={'Add Book'}/>
            <div className='addform_main'>
             <div className='add_message_div'>
                <h1>Create a book !</h1>
                {/* <p>Welcome to Mystic Books! We are delighted to have you join our community. Your decision to sign up marks the beginning of a streamlined and effortless experience. As you embark on this journey with Mystic Books, we're here to empower and assist you every step of the way. Your account awaits – let's create something amazing together!</p> */}
            </div>
            <div className='add_form_div'>
                <h2>Enter Book Information</h2>
                <p>A book should have title, author, category.</p>
                {
                    Loading ? <LoadingComp Text={'Adding book...'}/> : <form className='add_form' onSubmit={createBook}>
                    <label>Title *</label>
                    <input type="text" className='add_form_input' placeholder='Title' onChange={(e)=>{
                        SetTitle(e.target.value);
                    }}/>
                    <label>Author *</label>
                    <input className='add_form_input' type="text"  placeholder='Author'onChange={(e)=>{
                        SetAuthor(e.target.value);
                    }}/>
                    <label>Category *</label>
                    <input className='add_form_input' type="text" placeholder='Category' onChange={(e)=>{
                        SetCategory(e.target.value);
                    }}/>
                    
                    <input className='add_form_submit_btn' type="submit" value='Add Book'/>
                </form>
                }
                
            </div>
        </div>
        </div>
    );
}

export default AddBook;