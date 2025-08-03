import './NewProduct.css';
import ProductForm from './ProductForm';
function NewProduct(){
    function stateLift(obj){
        console.log('we have lifted state up ', obj);
    }
    return (<div className='new-product'>
        <ProductForm stateLift={stateLift} />
    </div>)

}
export default NewProduct;