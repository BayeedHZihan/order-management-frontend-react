import {useState} from 'react';

const GetOrders = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            title: "basketballs",
            items: 20,
            description: "ries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wit",
            status : "pending"
        },
        {
            id: 2,
            title: "footballs",
            items: 40,
            description: "ries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wit",
            status : "accepted"
        },
        {
            id: 3,
            title: "shoes",
            items: 10,
            description: "ries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wit",
            status : "delivered"
        }

    ]) 
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