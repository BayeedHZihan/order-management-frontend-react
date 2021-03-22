import { useState } from 'react';

const OrderSummary = () => {
    const [summary, setSummary] = useState(3);
    return (  
        <div>
            <button> get summary </button>
            <p>The number of orders made in the last day : {summary}</p>
        </div>
    );
}
 
export default OrderSummary;