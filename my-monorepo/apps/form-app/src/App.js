import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisibile: true,
    mode:"",
    favCar: ""
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

      console.log("from Data: ", formData);

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
      <label htmlFor='lastName'>Last Name</label>
      <br />
    
      <form onSubmit={submitHandler} >
          <input type='text' 
          placeholder='firstName'
          onChange={changeHandler}
          name='firstName' 
          id='firstName'
          value={formData.firstName} />
      
      <br />
          <input 
           type='text'
           placeholder='lastName'
           onChange={changeHandler} 
           name='lastName'
            value={formData.lastName} />

      <br />
      

           <input 
           type='email'
           placeholder='email'
           onChange={changeHandler}
           name='email'
           value={formData.email} />

      <br />
      <br />
          <textarea
           placeholder='Enter your comment here'
           onChange={changeHandler}
           name='comment'
           value={formData.comment || ""} // Ensure comment is defined
          ></textarea>

      <br />
      <br />
          <input
           type='checkbox'
           onChange={changeHandler}
           name='isVisibile'
           id='isVisibile'
           checked={formData.isVisibile} // Use checked for boolean state
          />  
          <label htmlFor='isVisible' >Is Visible</label>

      <br />
      <br />

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

          </fieldset>

      <br />
      <br />
          <label htmlFor='favCar'>Choose your favourite Car </label>
          <select 
          onChange={changeHandler}
          name='favCar'
          value={formData.favCar || ""} // Ensure favCar is defined
          id="favCar"
          >
            <option value="Scorpio">Scorpio</option>
            <option value="Thar">Thar</option>
            <option value="Fortuner">Fortuner</option>
            <option value="Audi">Audi</option>

          </select>

      <br />
      <br />
          <button type='submit'>Submit</button>

      </form>
    </div>
  );
}

export default App;
