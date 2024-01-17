import React,{useState} from 'react';
import './Styles/Navbar.css'
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handlelogout } from '../Redux/action';

function Navbar(props) {
    let [active,SetActive] = useState("nav_menu")
    let [toggleIcon,Settoggleicon] = useState("nav_toggler")
    let Navigate = useNavigate();
    let dispatch=useDispatch();
    
    let navToggle = ()=>{
        active === "nav_menu" ? SetActive("nav_menu nav_active") : SetActive("nav_menu");
        toggleIcon === "nav_toggler" ? Settoggleicon("nav_toggler toggle") : Settoggleicon("nav_toggler");
    }
    let returnhome=()=>{
        Navigate('/')
    }

    let Status = useSelector((store)=>{
        return store.Status;
    })

    return (
        <div className='nav'>
           <div className='brand' onClick={returnhome}>
                <h1>Mystic Books</h1>
            </div>
            <ul className={active}>
                <li className='nav_item'><Link to='/' className='nav_link'>Home</Link></li>
                <li className='nav_item'><Link to='/books' className='nav_link'>Books</Link></li>
                <li className='nav_item'>
                    {
                        Status ? <button onClick={()=>{
                            dispatch(handlelogout(null))
                            Navigate('/signuplogin')
                        }}>Logout</button> : <Link to='/signuplogin' className='nav_link'>Login</Link>
                    }
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    );
}

export default Navbar;