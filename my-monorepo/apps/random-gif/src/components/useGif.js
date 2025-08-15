
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const tagUrl= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



// react custom hook to fetch random gif
// this hook will take a tag as an argument and return the gif data
function useGif() {
  const [gif, setGif] = React.useState(null);  
  const [loading, setLoading] =  useState(false);
    // const [tag, setTag] = useState('');

    async function fetchRandomGif(tag) {
        setLoading(true);
        axios.get(tag ? `${randomUrl}&tag=${tag}` : randomUrl)
            .then(response => {
                console.log(response.data);
                const gifData = response.data.data.images.downsized_large.url;
                setGif(gifData);
                setLoading(false);
            })
            .catch(err => {
                // console.err("Error fetching random GIF:", err);
                 if (err.response && err.response.status === 429) {
                alert("Rate limit reached. Try again later.");
  }
            }   
            
        );

    }


    useEffect(() => {
        fetchRandomGif();
    }, []);


return {
        gif, loading, fetchRandomGif
    };

}   

export default useGif; 