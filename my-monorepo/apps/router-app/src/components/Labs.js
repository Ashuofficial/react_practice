
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Labs() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/profile');
    // This will navigate to the Profile page when the button is clicked
  };
  const backHandler = () => {
    navigate(-1);
    // This will navigate back to the previous page
  };
  return (
    <div className="Labs">
      <h1>Labs Page</h1>
      <p>This is the labs page of our application.</p>
      <button onClick={backHandler}>Go back</button>
      <button onClick={clickHandler}>Profile page</button>
    </div>
  );
}   
export default Labs;