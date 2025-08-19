import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import react from "react";

function Home(){
    return (
        <div>
            <Header/>
            <div>
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}
export default Home;