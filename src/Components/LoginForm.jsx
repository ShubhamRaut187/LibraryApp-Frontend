import React,{useState} from 'react';
import './Styles/LoginForm.css'

import LoadingComp from './LoadingComp';

function LoginForm({SetPage}) {
    let [Email,SetEmail] = useState('');
    let [Password,SetPassword] = useState('');
    let [Loading,SetLoading] = useState(false);

    return (
        <div className='loginform_main'>
            <div className='login_message_div'>
                <h1>Welcome Back !</h1>
                <p>Welcome back to Mystic Books! We're thrilled to see you again. Your presence brightens our digital space, and we're eager to assist you on your journey. As you log in, envision a seamless experience tailored just for you. Your input and engagement are the driving forces behind Mystic Books, and we're here to make every interaction meaningful. Let's continue this journey together – enter your credentials, and let the Mystic Books magic unfold. Thank you for choosing us once again!</p>
            </div>
            <div className='login_form_div'>
                <h2>Login to your account.</h2>
                <p>Kindly enter your registered email and password to access your Mystic Books account.</p>
                {
                    Loading ? <LoadingComp Text={'Logging in...!'}/> : <form className='login_form'>
                    <label>Email *</label>
                    <input className='login_form_input' type="email"  placeholder='Email'onChange={(e)=>{
                        SetEmail(e.target.value);
                    }}/>
                    <label>Password *</label>
                    <input className='login_form_input' type="password" placeholder='Password' onChange={(e)=>{
                        SetPassword(e.target.value);
                    }}/>
                    <input className='login_form_submit_btn' type="submit" value='Login'/>
                </form>
                }
                <p className='login_signup_text' onClick={()=>{
                    SetPage({
                        Title:'Signup',
                        Comp:false
                    })
                }}>Don't have a account, click to create one...!</p>
            </div>
        </div>
    );
}

export default LoginForm;