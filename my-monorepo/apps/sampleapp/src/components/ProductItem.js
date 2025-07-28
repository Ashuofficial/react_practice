import './ProductItem.css';
import ProductDate from "./ProductDate";


function ProductItem(props){
    console.log('inside prop title where titile shoudld render on ');
    return(
        <div className="product-box" > 
          <ProductDate date={props.date} />
         <h1>{props.title}</h1>
        </div>
      
    )
   
}

export default ProductItem;