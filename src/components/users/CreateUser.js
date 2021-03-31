import useState from 'react-usestateref'
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Container from 'react-bootstrap/Container';

const axios = require('axios');


const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();

    const [nameError, setNameError, nameErrorRef] = useState();
    const [emailError, setEmailError, emailErrorRef] = useState();
    const [passwordError, setPasswordError, passwordErrorRef] = useState();
    const [roleError, setRoleError, roleErrorRef] = useState();
    const [genericError, setGenericError, genericErrorRef] = useState();

    let history = useHistory();
    const loginRole = useSelector(state => state.isLoggedIn.userRole);

    const validate = () => {
        setNameError();
        setEmailError();
        setPasswordError();
        setRoleError();
        if (!name) 
            setNameError("Name can not be empty!");
        if (!email || !email.includes("@") || !email.includes(".com"))
            setEmailError("Invalid Email!");
        if (!password || password.length < 3) 
            setPasswordError("Password must be atleast 3 chars!");
        if (!role)
            setRoleError("Enter a role.");
        if (nameErrorRef.current || emailErrorRef.current || passwordErrorRef.current || roleErrorRef.current)
            return false;
        
        return true;
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (validate()){
            try{
                if (role === "admin" && loginRole !== "super admin") {
                    
                    history.push("/");
                    return;
                }
        
                axios.post('http://localhost:5000/users', {
                    name, email, password, role
                }).then(() => history.push("/get-users"))
                    .catch(e => setGenericError("One or more invalid fields!!!"))
            }
            catch(e){
                setGenericError("OOPS!!! Something went wrong!");
            }
        }
        
        
    }

    return ( 
        <Container>
            <div className="top">
                <h2> Create User </h2>
                <form>
                    <div className="text-danger">{genericError}</div><br/>

                    <label> UserName </label><br/>
                    <input type="text" id="username" onChange={(e) => setName(e.target.value)} placeholder="Enter name" required/>
                    <div className="text-danger">{nameError}</div>
                    <br/><br/>

                    <label> Email </label><br/>
                    <input type="email" id="useremail" required onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <div className="text-danger">{emailError}</div>
                    <br/><br/>

                    <label> Password </label><br/>
                    <input type="password" id="userpwd" minLength="3" required onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    <div className="text-danger">{passwordError}</div>
                    <br/><br/>

                    <label> Role </label><br/>
                    <input type="text" id="role" required onChange={(e) => setRole(e.target.value)} placeholder="Role"/>
                    <div className="text-danger">{roleError}</div>
                    <br/><br/>
                    <input type="submit" value="Submit" onClick={handleClick}/>
                </form>
            </div>
        </Container> 
    );
}
 
export default CreateUser;