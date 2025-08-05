
function Filter({filterData, category, setCategory}){

    return (
        <div>
            {filterData.map((ele)=>(
                <button 
                key={ele.id}
                onClick={()=>( setCategory(ele.title))}
                >{ele.title}</button>))}
        </div>
    )

}
export default Filter;