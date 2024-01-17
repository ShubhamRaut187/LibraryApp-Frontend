import React from 'react';
import './Styles/Home.css'
function Home(props) {
    return (
        <div className='home_welcome_main'>
            <div className='home_welcome_message'>
                <h1>Welcome to Mystic Books...!</h1>
                <p>We're delighted to have you on board. Mystic books simplifies your library management process, providing an intuitive platform to add, view, edit, delete books. Dive in and start your journey with easy and efficient management. Should you have any questions or need assistance, our support team is ready to help. Start your journey today with Mystic books. We're thrilled to be a part of your seamless experience!</p>
                <button onClick={()=>{
                    // navigate('/application')
                }}>Fill Application</button>
            </div>
            <div className='home_animation_div'>
                <img src="https://cdn.dribbble.com/users/5263864/screenshots/17280292/media/97209d8e34a69cb9a3cf6a9df0fafed6.gif" alt="gif" />
            </div>
        </div>
    );
}

export default Home;