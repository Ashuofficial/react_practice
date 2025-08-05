import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';
import { filterData, apiUrl } from './data';
import { useEffect, useState } from 'react';

function App() {
const [courses, setCourses]=useState([] );
const [loading, setLoading]=useState(true);
  const [category, setCategory] = useState(filterData[0].title);


        const fetchData=async()=>{
          setLoading(true);
        try {
          const res=await fetch(apiUrl);
          const response=await res.json();
          setCourses(response.data);
        }
        catch{
          toast.error("Something went wrong");
          
        }
        setLoading(false);
      }

  useEffect(()=>{

    fetchData();
  }, [])

   
  return (
    <div className="">
       <div className="bg-green-500 text-white p-4">
      Tailwind should style this box
    </div>
      <div>
      <Navbar />

      </div>
      <div>
      <Filter filterData={filterData}
              category={category}
              setCategory={setCategory}
         />

      </div>
      <div>

       { loading ? (<Spinner/> ) : ( <Cards courses={courses} category={category} />)}
     

      </div>
    </div>
  );
}

export default App;
