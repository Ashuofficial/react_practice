import ProductItem from "./ProductItem";

function Products(props){
    // const title=props.title;
    return (
        //  title.map( title => <ProductItem title={title} />)
        <>
         <ProductItem date={props.products[0].date} title={props.products[0].title} />
        <ProductItem date={props.products[1].date} title={props.products[1].title} />
        <ProductItem date={props.products[2].date} title={props.products[2].title} />
        </>
       
    )
 
}

export default Products;