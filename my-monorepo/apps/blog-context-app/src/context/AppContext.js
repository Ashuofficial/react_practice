
import {createContext, useEffect, useState} from 'react';
import baseUrl from '../baseUrl';
import { useNavigate } from 'react-router-dom';

// Create a context for the app
// This context will be used to share state and functions across components- to consume
export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);  
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate=useNavigate();

    // data filling is pending
    async function fetchPosts(page=1, tag=null, category) {
        let url= `${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`;
        }

        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
                        console.log('printing the data :', data);

            if(!data.posts || data.posts.length===0)
                throw new Error("Something went wrong!!");
            console.log('printing the data :', data);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setPage(data.page);

        } 
        catch (error) {
            console.log("Error fetching posts:", error);
            setPage(1); // Reset to page 1 on error
            setPosts([]); // Clear posts on error
            setTotalPages(0); // Reset total pages on error
        } finally {
            setLoading(false);
        }

    }

    // useEffect(()=>{
    // fetchPosts();
    // },[])

    function handlePageChange(page) {
            navigate( { search: `?page=${page}`});

        setPage(page);
        // fetchPosts(page);        
    }


    // Context value to be provided to components
    // This value will be accessible to all components that consume this context
    // It includes state variables and their setters
    // This allows components to read and update the state as needed
    // THIS is generic and we have do to this for every context we create
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchPosts,
        handlePageChange
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );


}
