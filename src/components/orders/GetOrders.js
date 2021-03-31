import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../redux/getOrdersSlice';
import {useHistory} from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GetOrders = () => {
    const dispatch = useDispatch();
    
    const orders = useSelector(state => state.orders.list);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const history = useHistory();
    const handleClick = orderId => {
        history.push({
            pathname: '/update-status',
            state: { id: orderId }
        });
    }

    return (  
        <Container>
            <div className="mt-4 mb-2">
                <h2> Orders List </h2>
                <ListGroup>
                    {
                        orders.map((order) => (
                            <Card className="mb-3" key={order._id} bg="info">
                                <div className= "pt-3 pb-3 ml-4">
                                    <Card.Subtitle>Title : {order.title}</Card.Subtitle>
                                    <p>items : {order.items}</p>
                                    {order.description && <p>description: {order.description}</p>}
                                    <p>status : {order.status}</p>
                                    <Button onClick={() => handleClick(order._id)} variant="warning" size="sm"> update status </Button>
                                </div>
                            </Card>
                        ))
                    }
                </ListGroup>
            </div>
        </Container>
    );
}
 
export default GetOrders;