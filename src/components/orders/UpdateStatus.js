import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const axios = require('axios');

const UpdateStatus = (props) => {
    const location = useLocation();
    const [orderId, setOrderId] = useState(null);
    const [status, setStatus] = useState("pending");

    useEffect(() => {
        if(location?.state?.id)
            setOrderId(location.state.id); 
    }, [location?.state?.id]);

    const handleChange = e => {
        setStatus(e.target.value);
    }

    const history = useHistory();
    const handleClick = e => {
        e.preventDefault();
        if (orderId){
        axios.patch(`http://localhost:5000/orders/change-status/${orderId}`, {status: status}, {withCredentials: true})
            .then((res) => {
                history.push("/get-orders");
            })
        }
    }

    return (  
        <div> 
            <h2> Update Order Status </h2>
            <form>
                <label>Change status to: </label>
                <select name="status" id="order-status" onChange={handleChange}>
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="delivered">Delivered</option>
                </select>
                <br/><br/>
                <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
        </div>
    );
}
 
export default UpdateStatus;