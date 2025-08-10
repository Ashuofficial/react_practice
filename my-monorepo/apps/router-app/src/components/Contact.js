import React from 'react';
import { useNavigate } from 'react-router-dom';
function Contact() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/labs');  
    // This will navigate to the Labs page when the button is clicked
  };

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <p>This is the contact page of our application.</p>
      
      <button onClick={clickHandler}>Go to Labs</button>
    </div>
  );
}

export default Contact;