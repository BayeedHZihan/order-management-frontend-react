import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../redux/getOrdersSlice';

const GetOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.list);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);
    return (  
        <div>
            <h2> Orders List </h2>
            {
                orders.map((order) => (
                    <div key={order.id}>
                        <h4>Title : {order.title}</h4>
                        <p>items : {order.items}</p>
                        {order.description && <p>description: {order.description}</p>}
                        <p>status : {order.status}</p>
                        <button> update status </button>
                    </div>
                ))
            }
        </div>
    );
}
 
export default GetOrders;