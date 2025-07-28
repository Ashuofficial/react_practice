
function ProductDate(props){

    return(
        <>
        <p>{props.date.toLocaleDateString()}</p>
        </>
    )
}
export default ProductDate;