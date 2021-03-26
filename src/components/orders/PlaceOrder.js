import {useState} from 'react';
const axios = require('axios');

const PlaceOrder = () => {
    const [title, setTitle] = useState();
    const [items, setItems] = useState();
    const [description, setDescription] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        const orderToPlace = {title, items};
        if (description) orderToPlace.description = description;
        axios.post('http://localhost:5000/orders/place-order', orderToPlace, {withCredentials: true})
    }

    return (  
        <div>
            <h2> Place Order </h2>
            <form>
                <label> Title </label><br/>
                <input type="text" id="order-title" required onChange={(e) => setTitle(e.target.value)}/><br/>
                <label> Items </label><br/>
                <input type="text" id="order-items" required onChange={(e) => setItems(e.target.value)}/><br/>
                <label> Description </label><br/>
                <textarea id="order-description" onChange={(e) => setDescription(e.target.value)}/><br/>
                <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
        </div>
    );
}
 
export default PlaceOrder;