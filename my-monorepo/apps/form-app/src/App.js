import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
     country: "",
     streeAddress: "",  
    city: "",
    state: "",
    zipCode: "",
    isComment: false,
    isCandidate: false,
    isOffer: false,
    // isVisibile: true,
    // mode:"",
    // everything: "",
    // sameAsEmail: "",
    notification: "",

    // comment: "",
   
  });

  // const [firstName, setFirstName]= useState("");
  // const [lastName, setLastName]= useState("");

  // function firstNameHandler(e){
  //   setFirstName(e.target.value);
  // }
  
  // function lastNameHandler(e){
  //   setLastName(e.target.value);
  //   console.log("Full Name: ", `${e.target.value} ${e.target.value}`); // This will log the last name twice
  // }

      // console.log("from Data: ", formData);

  function submitHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form Data Submitted: ", formData);

  }


  function changeHandler(e) {
    // console.log("Event: ", e.target);
    const { name, value, checked, type } = e.target;

    // Dynamically update the state based on input name
    setFormData(prevData => ({
      ...prevData,
      [name]: type==='checkbox' ?  checked : value // Dynamically update the state based on input name
    }));

  }

  // controlled component:- In controlled components, the form data is handled by the state in React. The input fields are bound to the state, and any changes to the input fields update the state.

  return (
    <div className="App">

      <label htmlFor='firstName'>First Name</label>
      <br />    
      <form onSubmit={submitHandler} >
          <input type='text' 
          placeholder='Ashok'
          onChange={changeHandler}
          name='firstName' 
          id='firstName'
          value={formData.firstName} />      
      <br />

           <label htmlFor='lastName'>Last Name</label>
      <br />
          <input 
           type='text'
           placeholder='Durunde'
           onChange={changeHandler} 
           name='lastName'
            id='lastName'
            value={formData.lastName} />
      <br />

          <label htmlFor='email'>Email address</label>
      <br />  
           <input 
           type='email'
           placeholder='durundeashok@gmail.com'
           onChange={changeHandler}
           name='email'
           value={formData.email} />
      <br />
      <br />

  
          <label htmlFor='country'>Country </label>
      <br />
          <select 
          onChange={changeHandler}
          name='country'
          value={formData.country || ""} // Ensure country is defined
          id="country"
          >
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
      <br />
      <br />

          <label htmlFor='streeAddress'>Street Address</label>
      <br />
          <input
           type='text'
           placeholder='123 Main St'
           onChange={changeHandler}
           name='streeAddress'
           id='streeAddress'
           value={formData.streeAddress || ""} // Ensure street address is defined
          />
      <br />
      <br />

          <label htmlFor='city'>City</label>
      <br />
          <input
           type='text'
           placeholder='New York'
            onChange={changeHandler}
            name='city'
            id='city'
            value={formData.city || ""} // Ensure city is defined
          />
      <br />
      <br />

          <label htmlFor='state'>State / Province</label>
      <br />
          <input    
            type='text'
            placeholder='West Bengal'
            onChange={changeHandler}
            name='state'
            id='state'
            value={formData.state || ""} // Ensure state is defined
          />
      <br />
      <br />

          <label htmlFor='zipCode'>Zip Code</label>
      <br />
          <input
           type='text'
           placeholder='700001'
           onChange={changeHandler}
           name='zipCode'
           id='zipCode'
           value={formData.zipCode || ""} // Ensure zip code is defined
          />
      <br />
      <br />

      <h3>By Email</h3>
          <input
           type='checkbox'
           onChange={changeHandler}
           name='isComment'
           id='isComment'
           checked={formData.isComment} // Use checked for boolean state
          />
         <label htmlFor='isComment'> Comments</label>
         <br /> 
         <small style={{ color: 'gray' }}>
        get notification when comment is added
      </small>
      <br />
      
          <input
           type='checkbox'
           onChange={changeHandler} 
            name='isCandidate'
            id='isCandidate'
            checked={formData.isCandidate} // Use checked for boolean state
          />
          <label htmlFor='isCandidate'> Is Candidate</label>
          <br />
          <small style={{ color: 'gray' }}>
        get notification when candidate applies for a job
      </small>
      <br />

          <input
           type='checkbox'
           onChange={changeHandler}
           name='isOffer'
           id='isOffer'
           checked={formData.isOffer} // Use checked for boolean state
          />
          <label htmlFor='isOffer'> Offers</label>  
          <br />
          <small style={{ color: 'gray' }}>
        get notification when offer is made
      </small>
      <br />

      <h3>Push Notifications</h3>
       <small style={{ color: 'gray' }}>
        these are delivered via SMS to your mobile phone
      </small>

      <br />

          <input
            type='radio'
            onChange={changeHandler}
            name='notification'
            value='everything'
            id='everything'
            checked={formData.notification === 'everything'} // Use checked for boolean state
          />
          <label htmlFor='everything'> Everything</label>
          <br />

          <input
            type='radio'
            onChange={changeHandler}
            name='notification'   
            value='sameAsEmail'
            id='sameAsEmail'
            checked={formData.notification === 'sameAsEmail'} // Use checked for boolean state
          />
          <label htmlFor='sameAsEmail'> Same as Email</label> 

          <br />  

          <input
            type='radio'
            onChange={changeHandler}
            name='notification'
            value='noNotification'
            id='noNotification'
            checked={formData.notification === 'noNotification'} // Use checked for boolean state
          />
          <label htmlFor='noNotification'> No Notification</label>    

      <br />
      <br />



          {/* <textarea
           placeholder='Enter your comment here'
           onChange={changeHandler}
           name='comment'
           value={formData.comment || ""} // Ensure comment is defined
          ></textarea>

      <br />
      <br /> */}
          {/* <input
           type='checkbox'
           onChange={changeHandler}
           name='isVisibile'
           id='isVisibile'
           checked={formData.isVisibile} // Use checked for boolean state
          />  
          <label htmlFor='isVisible' >Is Visible</label>

      <br />
      <br /> */}
{/* 
          <fieldset>
          <legend>Mode</legend>
          
          <input
          type='radio'
          onChange={changeHandler}
          name='mode' 
          value="Online-Mode"
          id='Online-Mode'
          checked={formData.mode==='Online-Mode' } />

          <label htmlFor='Online-Mode'>Online Mode</label>

           <input
          type='radio'
          onChange={changeHandler}
          name='mode' 
          value="Offline-Mode"
          id='Offline-Mode'
          checked={formData.mode==='Offline-Mode'} />

          <label htmlFor='Offline-Mode'>Offline Mode</label>

          </fieldset> */}

   

      <br />
      <br />
          <button type='submit'>Submit</button>

      </form>
    </div>
  );
}

export default App;
