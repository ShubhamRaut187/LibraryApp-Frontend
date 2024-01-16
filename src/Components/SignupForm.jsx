import React,{useState} from 'react';
import './Styles/SignupForm.css'
import LoadingComp from './LoadingComp';

function SignupForm({SetPage}) {
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let [Name,SetName] = useState('');
    let [Loading,SetLoading] = useState(false);
    
    return (
        <div className='signupform_main'>
             <div className='signup_message_div'>
                <h1>Welcome to Mystic Books !</h1>
                <p>Welcome to Mystic Books! We are delighted to have you join our community. Your decision to sign up marks the beginning of a streamlined and effortless experience. As you embark on this journey with Mystic Books, we're here to empower and assist you every step of the way. Your account awaits – let's create something amazing together!</p>
            </div>
            <div className='signup_form_div'>
                <h2>Signup to your account.</h2>
                <p>Password must be atleast 8 character long, must have a one uppercase, one lowercase letter, a number and a special character.</p>
                {
                    Loading ? <LoadingComp Text={'Signing in...'}/> : <form className='signup_form'>
                    <label>Name *</label>
                    <input type="text" className='signup_form_input' placeholder='Name' onChange={(e)=>{
                        SetName(e.target.value);
                    }}/>
                    <label>Email *</label>
                    <input className='signup_form_input' type="email"  placeholder='Email'onChange={(e)=>{
                        SetEmail(e.target.value);
                    }}/>
                    <label>Password *</label>
                    <input className='signup_form_input' type="password" placeholder='Password' onChange={(e)=>{
                        SetPassword(e.target.value);
                    }}/>
                    <div className='signup_role_main'>
                    <div className='signup_role_div'>
                        <label>Creator and Viewer</label>
                        <p>Selecting creator and viewer role allows you to create, update, delete all books and view specific books created by you.</p>
                        <input type="checkbox" />
                    </div>
                    <div className='signup_role_div'>
                        <label>View all</label>
                        <p>Selecting view all role allows you to view all books.</p>
                        <input type="checkbox" />
                    </div>
                    </div>
                    <input className='signup_form_submit_btn' type="submit" value='Signup'/>
                </form>
                }
                <p className='signup_signup_text' onClick={()=>{
                    SetPage({
                        Title:'Login',
                        Comp:true
                    })
                }}>Already have a account, click to Login...!</p>
            </div>
        </div>
    );
}

export default SignupForm;