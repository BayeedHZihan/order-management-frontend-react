import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/getProductsSlice';

const GetProducts = () => {
    // const [products, setProducts] = useState([
    //     {
    //         id : 1,
    //         title : "cricket bat", 
    //         price : 2.50,
    //         description : "cokaboora mongoose",
    //         category : "sports",
    //         image : "http://bat-image.jpg"
    //     },
    //     {
    //         id : 2,
    //         title : "football", 
    //         price : 12.50,
    //         description : "number 5 large",
    //         category : "sports",
    //         image : "http://football.jpg"
    //     },
    //     {
    //         id : 3,
    //         title : "necklace", 
    //         price : 223.50,
    //         description : "golden",
    //         category : "jewelry",
    //         image : "http://necklace.jpg"
    //     },
    // ])

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.list);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (  
        <div>
            <h2> Products List </h2>
            {products.map((product) => (
                <div key={product.id}>
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