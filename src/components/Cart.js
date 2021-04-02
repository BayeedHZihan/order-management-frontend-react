import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    //const [amount, setAmount] = useState(0);

    const products = useSelector(state => state.cart.list);
    return (  
        <Container>
            <div>
                <h2> Cart </h2>
                <ListGroup>
                    {products && products.map((product) => (
                        <Card className="mb-3"  key={product.product._id}>
                            <div className= "pt-3 pb-3 ml-4">
                                {product.product.image && <img src={product.product.image} alt="new" width="150" height="150"/>}<br/><br/>
                                <Card.Title>{product.product.title}</Card.Title>
                                <span className="mr-5">Price: ${product.product.price}</span>
                                <span>Total: ${product.product.price}</span>
                                <br/><br/>
                                <Button variant="outline-primary" size="sm">+</Button>
                                <span className="ml-5 mr-5">{product.amount}</span>
                                <Button variant="outline-primary" size="sm">-</Button>
                                
                                {/* <Button variant="info" onClick={() => removeClick(product)}>Add to cart</Button> */}
                            </div>
                        </Card>
                    ))}
                </ListGroup>
                <Button variant="info">Place Order</Button><br/><br/><br/>
            </div>
        </Container>
    );
}
 
export default Cart;