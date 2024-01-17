import React,{useState,useEffect} from 'react';
import './Styles/Books.css'
import PageTitle from '../Components/PageTitle';
import CreatorComp from '../Components/CreatorComp';
import { useSelector } from 'react-redux';
import CreatorCol from '../Components/CreatorCol';

function Books(props) {
    
    let user_roles = useSelector((store)=>{
        return store.User.User.Role;
    })
    let UserId = useSelector((store)=>{
        return store.User.User.ID
    })
    let Token = useSelector((store)=>{
        return store.User.Token
    })
    let [Role,SetRole] = useState(user_roles[0]);
    let [Books,SetBooks] = useState([]);
    let getData = (endpoint) => {
        fetch(`https://mysticbooks.onrender.com/books${endpoint}`,{
            headers:{
                'authorization':`Bearer ${Token}`
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            SetBooks(response.Books)
        }).catch((error)=>{
            
            // console.log(error);
        })
    }
    useEffect(()=>{
        Role === 'VIEWER' ? getData(`/${UserId}`) : getData(`/`) 
    },[Role,Token,UserId])
    return (
        <div>
            <PageTitle Title={'Books'}/>
            {
                Role === 'VIEWER' || Role === 'CREATOR' ? <CreatorComp Role={Role} SetRole={SetRole} SetBooks={SetBooks} Token={Token}/> : <></>
            }
            <div className='books_main'>
                <table className='books_table'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        {
                            Role === 'CREATOR' ? <th>Operations</th> : <></>
                        }
                    </tr>
                    </thead>
                    <tbody>
                        {
                           Books ? Books.map((elem)=>{
                            return  <CreatorCol key={elem._id} Role={Role} elem={elem}/>
                           }) : <></>
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Books;