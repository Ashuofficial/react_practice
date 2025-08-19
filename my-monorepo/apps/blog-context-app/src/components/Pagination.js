import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
          console.log('inside pagination');

  const {page, handlePageChange, totalPages}=useContext(AppContext);
  return (
    <div className="pagination">
     <div className="buttons">
       { page>1 &&
        <button className="previous" onClick={()=>handlePageChange(page-1)}>Previous</button>
        }

        {
      page+1<=totalPages &&
      <button className="next" onClick={()=>handlePageChange(page+1)}>Next</button>
      }       
     </div>
     
     <div>
       Page {page} of {totalPages}
     </div>
    </div>
  );
}
export default Pagination;