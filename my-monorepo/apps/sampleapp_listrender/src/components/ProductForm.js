import { useState } from 'react';
import './ProductForm.css';
function ProductForm(props){
    const [newTitle, setNewTitle]= useState('')
    const [newDate, setNewDate]= useState('');
    const stateup=props.stateLift;

    function dateChangeHandler(event){
        // console.log(event.target.value);
        setNewDate(event.target.value);
    }

    function titleChangeHandle(event){
        // console.log(event.target.value);
        setNewTitle(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        stateup(newTitle)
        const productData={
            title:newTitle,
            date:newDate
        }
        console.log(productData);

        setNewDate('');
        setNewTitle('');
    }

    return(
        <form onSubmit={submitHandler}>
        <div className='new-product_title'>
            <label>Title</label>
            <input value={newTitle} onChange={titleChangeHandle} type='text' />
        </div>
        <div className='new-product_date'>
            <label>Date</label>
            <input value={newDate} onChange={dateChangeHandler} type='date' min='2025-01-01' max='2025-12-12' />
        </div>
        <div className='new-product_button'> 
            <button type='submit'>Add Product</button>
        </div>
        </form >
    )

    

}

export default ProductForm;