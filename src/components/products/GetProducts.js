import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/getProductsSlice';
import {addToCart} from '../../redux/cartSlice';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GetProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.products.list);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleClick = (product) => {
        dispatch(addToCart(product));
    }

    return (  
        <Container>
            <div className="mt-4 mb-2">
                <h2> Products List </h2>
                <ListGroup>
                    {data && data.map((product) => (
                        <Card className="mb-3"  key={product._id}>
                            <div className= "pt-3 pb-3 ml-4">
                                {product.image && <img src={product.image} alt="new" width="150" height="150"/>}<br/><br/>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Subtitle>${product.price}</Card.Subtitle>
                                {product.description && <Card.Text>{product.description}</Card.Text>}
                                <Button variant="info" onClick={() => handleClick(product)}>Add to cart</Button>
                            </div>
                        </Card>
                    ))}
                </ListGroup>
            </div>
        </Container>
    );
}
 
export default GetProducts;