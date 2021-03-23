import {useState} from 'react';
const axios = require('axios');


const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users', {
            name, email, password, role
        })
    }

    return (  
        <div>
            <h2> Create User </h2>
            <form>
                <label> UserName </label><br/>
                <input type="text" id="username" required onChange={(e) => setName(e.target.value)}/><br/>
                <label> Email </label><br/>
                <input type="email" id="useremail" required onChange={(e) => setEmail(e.target.value)}/><br/>
                <label> Password </label><br/>
                <input type="password" id="userpwd" minLength="3" required onChange={(e) => setPassword(e.target.value)}/><br/>
                <label> Role </label><br/>
                <input type="text" id="role" required onChange={(e) => setRole(e.target.value)}/><br/>
                <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
        </div>
    );
}
 
export default CreateUser;