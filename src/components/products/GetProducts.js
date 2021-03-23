import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/getProductsSlice';

const GetProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.products.list);
    //console.log("the products are :", data);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (  
        <div>
            <h2> Products List </h2>
            {data && data.map((product) => (
                <div key={product._id}>
                    <h4>Title : {product.title}</h4>
                    <p>price : {product.price}</p>
                    {product.description && <p>description : {product.description}</p>}
                    {product.category && <p>category : {product.category}</p>}
                    {product.image && <p>image : {product.image}</p>}
                </div>
            ))}
        </div>
    );
}
 
export default GetProducts;