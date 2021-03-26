import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../redux/getOrdersSlice';
import {useHistory} from 'react-router-dom';

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
        <div>
            <h2> Orders List </h2>
            {
                orders.map((order) => (
                    <div key={order._id}>
                        <h4>Title : {order.title}</h4>
                        <p>items : {order.items}</p>
                        {order.description && <p>description: {order.description}</p>}
                        <p>status : {order.status}</p>
                        <button onClick={() => handleClick(order._id)}> update status </button>
                    </div>
                ))
            }
        </div>
    );
}
 
export default GetOrders;