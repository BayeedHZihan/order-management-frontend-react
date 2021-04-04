import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {addToCart, removeFromCart} from '../redux/cartSlice';

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const products = useSelector(state => state.cart.list);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const dispatch = useDispatch();
    

    const handleAdd = (product) => {
        dispatch(addToCart(product));
    }
    
    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    }

    let history = useHistory();
    
    const handlePlaceOrder = () => {
        //redirect to place order with cart list 
        history.push("/place-order");
    }

    return (  
        <Container>
            <div className="mt-4 mb-2">
                <h2> Cart </h2>
                <ListGroup>
                    {products && products.map((product) => (
                        <Card className="mb-3"  key={product.product._id}>
                            <div className= "pt-3 pb-3 ml-4">
                                {product.product.image && <img src={product.product.image} alt="new" width="150" height="150"/>}<br/><br/>
                                <Card.Title>{product.product.title}</Card.Title>
                                <span className="mr-5">Price: ${product.product.price}</span>
                                <span>Total: ${product.product.price * product.amount}</span>
                                <br/><br/>
                                <Button variant="outline-primary" size="sm" onClick={() => handleAdd(product.product)}>+</Button>
                                <span className="ml-5 mr-5">{product.amount}</span>
                                <Button variant="outline-primary" size="sm" onClick={() => handleRemove(product.product)}>-</Button>
                            </div>
                        </Card>
                    ))}
                    {products.length===0 && <h4 className="text-primary">There are no products in the cart ...</h4>}
                    {products.length>0 && <h4>Total: ${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>}
                    {products.length>0 && <Button variant="info" onClick={handlePlaceOrder}>Place Order</Button>}<br/><br/><br/>
                    
                </ListGroup>
                
            </div>
        </Container>
    );
}
 
export default Cart;