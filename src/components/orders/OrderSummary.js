import axios from 'axios';
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const OrderSummary = () => {
    const [summary, setSummary] = useState(0);

    const handleClick = () => {
        axios.get('http://localhost:5000/orders/summary', {withCredentials: true})
            .then((res) => setSummary(res.data))
    }
    return (  
        <Container>
            <div className="top">
                <Button onClick={handleClick} className="mb-5" variant="info"> get summary </Button>
                <h3>The number of orders made in the last day:  {summary}</h3>
            </div>
        </Container>
    );
} 
 
export default OrderSummary;