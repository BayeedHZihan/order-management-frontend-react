import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {emptyCart} from '../../redux/cartSlice';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const axios = require('axios');

const PlaceOrder = () => {
    const products = useSelector(state => state.cart.list);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    let history = useHistory();
    const dispatch = useDispatch();

    const handleCheckout = () => {
        products.map(item => {
            const orderToPlace = {
                title: item.product.title,
                items: item.amount
            }
            axios.post('http://localhost:5000/orders/place-order', orderToPlace, {withCredentials: true})
                .catch(e => console.log(e))
        })
        dispatch(emptyCart());
        history.push("/");
    }

    return (
        <Container>
            <div className="mt-5">
                {products && products.map((product) => (
                    <Card className="mb-3"  key={product.product._id}>
                        <div className= "pt-3 pb-3 ml-4">
                            {product.product.image && <img src={product.product.image} alt="new" width="150" height="150"/>}<br/><br/>
                            <Card.Title>{product.product.title}</Card.Title>
                            <span className="mr-5">Price: ${product.product.price}</span>
                            <span>Total: ${product.product.price * product.amount}</span>
                        </div>
                    </Card>
                ))}
                {products.length>0 && <h4>Total: ${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>} <br/>
                {products.length>0 && <Button variant="info" onClick={handleCheckout}>Checkout</Button>}
                {products.length===0 && <h4 className="text-primary">No Order To Place ...</h4>}<br/><br/><br/>
            </div>
        </Container>
    )
}

// const PlaceOrder = () => {
//     const [title, setTitle] = useState();
//     const [items, setItems] = useState();
//     const [description, setDescription] = useState();

//     let history = useHistory();

//     const handleClick = (e) => {
//         e.preventDefault();
//         const orderToPlace = {title, items};
//         if (description) orderToPlace.description = description;
//         axios.post('http://localhost:5000/orders/place-order', orderToPlace, {withCredentials: true})
//             .then(() => history.push("/"))
//     }

//     const products = useSelector(state => state.cart.list);

//     return (  
//         <Container>
//             <div className="top">
//                 <h2> Place Order </h2>
//                 <form>
//                     <label> Title </label><br/>
//                     <input type="text" id="order-title" placeholder="enter a title" required onChange={(e) => setTitle(e.target.value)}/>
//                     <br/><br/>

//                     <label> Items </label><br/>
//                     <input type="text" id="order-items" placeholder="number of items" required onChange={(e) => setItems(e.target.value)}/>
//                     <br/><br/>

//                     <label> Description </label><br/>
//                     <textarea id="order-description" onChange={(e) => setDescription(e.target.value)}/><br/><br/>
                    
//                     <input type="submit" value="Submit" onClick={handleClick}/>
//                 </form>
//             </div>
//         </Container>
//     );
// }
 
export default PlaceOrder;