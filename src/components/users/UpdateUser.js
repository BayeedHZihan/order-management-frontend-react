import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UpdateUser = (props) => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.state.id); // result: users id to update
    }, [location]);

    return (  
        <div>
            <h2> Update User </h2>
            <form>
                <label> UserName </label><br/>
                <input type="text" id="update-name" /><br/>
                <label> Email </label><br/>
                <input type="email" id="update-email" /><br/>
                <label> Password </label><br/>
                <input type="password" id="update-pwd" minLength="3" /><br/>
                <label> Role </label><br/>
                <input type="text" id="update-role"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
 
export default UpdateUser;