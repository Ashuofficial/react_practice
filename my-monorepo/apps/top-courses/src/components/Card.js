
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
function Card({course, likedCourses, setLikedCourses}){

    console.log('single course :', course);

    const clickHandler=()=>{
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>
                prev.filter((cid)=>
                    (cid!==course.id)
                
            )
        )
        toast.warning("Like removed");
        }else{
            if(likedCourses.length===0){
                setLikedCourses([course.id])
            }else{
                setLikedCourses((prev)=>
                    [...prev, course.id]
               );
            }
            toast.success("Liked Successfully");
        }
    };

    return (
        <div>
            <div>
                <img src={course.image.url} alt={course.image.title}></img>

                
            </div>

            <div>
                    <button onClick={clickHandler}>
                       { 
                       likedCourses?.includes(course.id) ?
                         (  <FcLike fontSize="1.75rem " />) 
                         : (<FcLikePlaceholder fontSize="1.75rem" /> )
                         }
                      
                    </button>
            </div>


            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    )
}
export default Card;
