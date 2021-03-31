import {useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {login} from '../redux/authSlice';
import jwt_decode from "jwt-decode";
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../redux/getUsersSlice';
import useState from 'react-usestateref'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import '../styles/login.css';

const Login = () => {
    let history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole, ref] = useState();
    const [emailError, setEmailError, emailErrorRef] = useState();
    const [passwordError, setPasswordError, pwErrorRef] = useState();
    const [genericError, setGenericError, genericErrorRef] = useState();

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    const validate = () => {
        setEmailError();
        setPasswordError();
        if (!email || !email.includes("@") || !email.includes(".com"))
            setEmailError("Invalid Email!");
        if (!password || password.length < 3) 
            setPasswordError("Password must be atleast 3 chars!");
        if (emailErrorRef.current || pwErrorRef.current)
            return false;
        
        return true;
    }

    const handleClick = async (e) => {
        e.preventDefault(); 
        if (validate()){
            try{
                const loginData = {email, password};
                const res = await axios.post('/login', loginData);
                if (res) {
                    const decoded = jwt_decode(res.data.token);

                    for (let i=0; i<users.length; i++){
                        if (users[i]._id === decoded.id) {
                            setRole(users[i].role);
                            break;
                        }
                    }

                    dispatch(login(ref.current));
                    history.push("/");
                }
            }
            catch (err) {   
                setGenericError("Incorrect Email or Password!!!");
            }
        }
    }

    return ( 
        <Container>
            <div className="top">
                <h2> Sign-In </h2>
                <Form>
                    <div className="text-danger">{genericError}</div> <br/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label><br/>
                        <input type="email" id="loginusername" onChange={e => setEmail(e.target.value)} placeholder="Enter email" required/>
                        <div className="text-danger">{emailError}</div>
                        <br/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <label> Password </label><br/>
                        <input type="password" id="loginpwd" minLength="3" onChange={e => setPassword(e.target.value)} placeholder="Password" required/>
                        <div className="text-danger">{passwordError}</div>
                        <br/>
                    </Form.Group>
                    <input type="submit" value="Login" onClick={handleClick}/>
                </Form>
            </div>
        </Container>
    );
}
 
export default Login;