import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText]= useState('');
  const [size, setSize]=useState(window.innerWidth);


  // on every individual render
  // useEffect(()=>{
  //   console.log('UI rendered successfully');
  // })


  // only once on app run
  //   useEffect(()=>{

  //   console.log('UI rendered  successfully');
  // },[])

  // Variation 3- first render + on dependency change
  // useEffect(()=>{
  //   console.log('change observerd');
  // }, [text])

  // variation 4- to handle unmounting of a component
  
  useEffect(()=>{
    console.log('listner added');

    return ()=>{
      console.log('listner removed');
    }
  }, [text])


  function inputChangeHandler(e){
    setText(e.target.value);
    console.log(text);
  }

  // on window resize 
  useState(()=>{

    function handleResize(){
          setSize(window.innerWidth);

    }
    window.addEventListener('resize', handleResize)
  }, [])

  // fetch api on component did mount
  useEffect(()=>{
    fetch('https://example.org/products.json')
    // .then(!response.ok => console.log(response.status))
    .then(response=>response.json)
    .then(data=>console.log(data))
    .catch(err=>console.error(err));

  },[])

  return (
    <div className="App">
      <h2>"window size is :" {size} </h2>
      <input type='text' onChange={inputChangeHandler}></input>
    </div>
  );
}

export default App;
