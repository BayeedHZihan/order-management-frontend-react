import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {useHistory} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

const axios = require('axios');

const UpdateUser = (props) => {
    const location = useLocation();
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const [genericError, setGenericError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [roleError, setRoleError] = useState();

    useEffect(() => {
       setUserId(location.state.id);
    }, [location]);

    let history = useHistory();

    const validate = () => {
        if (!name && !email && !password && !role){
            setGenericError("* Fill in atleast one field to update.");
            return false;
        }
        if (email && (!email.includes("@") || !email.includes(".com"))){
            setEmailError("* Not a valid email!");
            return false;
        }
        if (password && password.length < 3) {
            setPasswordError("* Password should be atleast 3 chars!");
            return false;
        }
        if (role && (role!=="user" && role!=="admin")){
            setRoleError("* Not a valid role!");
            return false;
        }
        return true;
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (validate()){
            try{  
                const userUpdate = {};
                if (name) userUpdate.name = name;
                if (email) userUpdate.email = email;
                if (password) userUpdate.password = password;
                if (role) userUpdate.role = role;
                if (userId) {
                    axios.patch(`http://localhost:5000/users/${userId}`, userUpdate)
                        .then(() => history.push("/get-users"))
                        .catch(e => setGenericError("One or more invalid fields!!!"))
                }
            }
            catch(e){
                setGenericError("OOPS!!! Something went wrong!");
            }
        }
    }

    return (  
        <Container>
            <div className="top">
                <h2> Update User </h2>
                <form>
                    <div className="text-danger">{genericError}</div><br/>

                    <label> UserName </label><br/>
                    <input type="text" id="update-name" onChange={(e) => setName(e.target.value)}/>
                    <br/>

                    <label> Email </label><br/>
                    <input type="email" id="update-email" onChange={(e) => setEmail(e.target.value)}/>
                    <div className="text-danger">{emailError}</div>
                    <br/>

                    <label> Password </label><br/>
                    <input type="password" id="update-pwd" minLength="3" onChange={(e) => setPassword(e.target.value)}/>
                    <div className="text-danger">{passwordError}</div>
                    <br/>
                    <label> Role </label><br/>
                    <input type="text" id="update-role" onChange={(e) => setRole(e.target.value)}/>
                    <div className="text-danger">{roleError}</div>
                    <br/>
                    
                    <input type="submit" value="Submit" onClick={handleClick}/>
                </form>
            </div>
        </Container>
    );
}
 
export default UpdateUser;