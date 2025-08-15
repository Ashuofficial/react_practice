
import React, {   } from 'react';
import Spinner from './Spinner';
import useGif from './useGif';

// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
    // const [gif, setGif] = React.useState(null);  
    // const [loading, setLoading] =  useState(false);

//     async function fetchRandomGif() {
//         const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//         setLoading(true);
//         axios.get(url)
//             .then(response => {
//                 console.log(response.data);
//                 const gifData = response.data.data.images.downsized_large.url;
//                 setGif(gifData);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 // console.err("Error fetching random GIF:", err);
//                  if (err.response && err.response.status === 429) {
//                 alert("Rate limit reached. Try again later.");
//   }
//             }   
            
//         );

//     }

//     useEffect(() => {
//         fetchRandomGif();
//     }, []);

    const {gif, loading, fetchRandomGif} = useGif();

  return (
    <div>
      <h2>A Random GIF</h2>

        {loading ? 
        <Spinner/> :
         <img src={gif} alt="Random GIF" width="450" />  }
     

      <button onClick={() => {
         fetchRandomGif();
      }}>
        Generate
      </button>


      {/* Random GIF component content goes here */}
    </div>
  );
}

export default Random;