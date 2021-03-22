const PlaceOrder = () => {
    return (  
        <div>
            <h2> Place Order </h2>
            <form>
                <label> Title </label><br/>
                <input type="text" id="order-title" required/><br/>
                <label> Items </label><br/>
                <input type="text" id="order-items" required/><br/>
                <label> Description </label><br/>
                <textarea id="order-description"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
 
export default PlaceOrder;