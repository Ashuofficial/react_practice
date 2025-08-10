import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import   Home  from './components/Home';
import Contact from './components/Contact';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import About from './components/About';
import Profile from './components/Profile';
import MainHeader from './components/MainHeader';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </ul> 
      </nav>  
      {/* <h1>Welcome to the Router App</h1> */}
     
      <Routes>
        <Route path="/"   element={<MainHeader/>} >
        <Route index element={<Home />} /> 
        {/* index- it is a default route, if no other match then this will match */}
        <Route path="/labs" element={<Labs/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/profile" element={<Profile/> } />
        <Route path="*" element={<NotFound /> } />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
