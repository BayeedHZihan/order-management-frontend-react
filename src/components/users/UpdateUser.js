import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';

const axios = require('axios');

const UpdateUser = (props) => {
    const location = useLocation();
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
       setUserId(location.state.id);
    }, [location]);

    const handleClick = (e) => {
        e.preventDefault();
        const userUpdate = {};
        if (name) userUpdate.name = name;
        if (email) userUpdate.email = email;
        if (password) userUpdate.password = password;
        if (role) userUpdate.role = role;
        if (userId) {
            axios.patch(`http://localhost:5000/users/${userId}`, userUpdate)
        }
    }

    return (  
        <Container>
            <div className="top">
                <h2> Update User </h2>
                <form>
                    <label> UserName </label><br/>
                    <input type="text" id="update-name" onChange={(e) => setName(e.target.value)}/><br/>
                    <label> Email </label><br/>
                    <input type="email" id="update-email" onChange={(e) => setEmail(e.target.value)}/><br/>
                    <label> Password </label><br/>
                    <input type="password" id="update-pwd" minLength="3" onChange={(e) => setPassword(e.target.value)}/><br/>
                    <label> Role </label><br/>
                    <input type="text" id="update-role" onChange={(e) => setRole(e.target.value)}/><br/>
                    <input type="submit" value="Submit" onClick={handleClick}/>
                </form>
            </div>
        </Container>
    );
}
 
export default UpdateUser;