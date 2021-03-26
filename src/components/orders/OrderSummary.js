import axios from 'axios';
import { useState, useEffect } from 'react';

const OrderSummary = () => {
    const [summary, setSummary] = useState(0);

    const handleClick = () => {
        axios.get('http://localhost:5000/orders/summary', {withCredentials: true})
            .then((res) => setSummary(res.data))
    }
    return (  
        <div>
            <button onClick={handleClick}> get summary </button>
            <p>The number of orders made in the last day : {summary}</p>
        </div>
    );
}
 
export default OrderSummary;