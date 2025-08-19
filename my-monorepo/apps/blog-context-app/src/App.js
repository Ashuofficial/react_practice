import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import {useSearchParams, useLocation} from 'react-router-dom';
import { AppContext } from './context/AppContext';
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';


function App() {
  const {fetchPosts} =useContext(AppContext);
  console.log('inside app js');

  const [searchParams, setSearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{
    const page=searchParams.get("page") ?? 1; 
    if(location.pathname.includes("tags")){
      // means we have to show tag wala page
      const tag= location.pathname.split("/").at(-1).replaceAll("-"," "); 
      fetchPosts(Number(page),tag);
    } else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchPosts(Number(page),null, category);
    }else {
      fetchPosts(Number(page));
    }
  },[location.pathname, location.search])

  return (
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path ='/blog/:blogId' element={<BlogPage />} />
      <Route path ='/tags/:tag' element={<TagPage />} />
      <Route path ='/categories/:category' element={<CategoryPage />} />
    </Routes>
    // <div className="App">
    //     <Header />
    //     <Blogs />
    //     <Pagination />
    // </div>
  );
}

export default App;
