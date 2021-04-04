import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const axios = require('axios');

const PlaceOrder = () => {
    const products = useSelector(state => state.cart.list);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    let history = useHistory();

    const handleCheckout = () => {
        products.map(item => {
            const orderToPlace = {
                title: item.product.title,
                items: item.amount
            }
            axios.post('http://localhost:5000/orders/place-order', orderToPlace, {withCredentials: true})
                .then(() => history.push("/"))
                .catch(e => console.log(e))
        })
    }

    return (
        <Container>
            <div className="mt-5">
            {products.length>0 && <h4>Total: ${(Math.round(totalPrice * 100) / 100).toFixed(2)}</h4>} <br/>
            <Button variant="info" onClick={handleCheckout}>Checkout</Button>
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