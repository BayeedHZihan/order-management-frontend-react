const UpdateStatus = () => {
    return (  
        <div> 
            <h2> Update Order Status </h2>
            <form>
                <label>Change status to: </label>
                <select name="status" id="order-status">
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="delivered">Delivered</option>
                </select>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
 
export default UpdateStatus;