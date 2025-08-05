
import { useState } from 'react';
import Card from './Card';
function Cards({courses, category}){
    console.log("data :" , courses);
    const [likedCourses, setLikedCourses]= useState([]);
    // we want all the data in one array
    const getCourses=()=>{
        if(category==='All'){
let allCourses=[];

        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses
        } else{
            return courses[category];
        }
            
    }

    return (
        <div>
           {
            getCourses().map((course)=>{
               return <Card key={course.id}
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
                />
            })
            }
        </div>
    )

}
export default Cards;