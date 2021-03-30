import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

const axios = require('axios');


const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    let history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users', {
            name, email, password, role
        }).then(() => history.push("/get-users"))
    }

    return ( 
        <Container>
            <div className="top">
                <h2> Create User </h2>
                <form>
                    <label> UserName </label><br/>
                    <input type="text" id="username" onChange={(e) => setName(e.target.value)} placeholder="Enter name" required/><br/><br/>
                    <label> Email </label><br/>
                    <input type="email" id="useremail" required onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br/><br/>
                    <label> Password </label><br/>
                    <input type="password" id="userpwd" minLength="3" required onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br/><br/>
                    <label> Role </label><br/>
                    <input type="text" id="role" required onChange={(e) => setRole(e.target.value)} placeholder="Role"/><br/><br/>
                    <input type="submit" value="Submit" onClick={handleClick}/>
                </form>
            </div>
        </Container> 
    );
}
 
export default CreateUser;