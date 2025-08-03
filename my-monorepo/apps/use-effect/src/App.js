import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText]= useState('')


  // on every individual render
  // useEffect(()=>{
  //   console.log('UI rendered successfully');
  // })


  // only once on app run
  //   useEffect(()=>{

  //   console.log('UI rendered  successfully');
  // },[])

  // Variation 3- first render + on dependency change
  useEffect(()=>{
    console.log('change observerd');
  }, [text])


  function inputChangeHandler(e){
    setText(e.target.value);
    console.log(text);
  }
  return (
    <div className="App">
      <input type='text' onChange={inputChangeHandler}></input>
    </div>
  );
}

export default App;
