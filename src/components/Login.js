import {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../redux/authSlice';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import '../styles/login.css';

const Login = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = async (e) => {
        e.preventDefault(); 
        try{
            const loginData = {email, password};
            const res = await axios.post('/login', loginData);
            if (res) {
                dispatch(login());
                history.push("/");
            }
        }
        catch (err) {   
            console.log(err);
        }
    }

    return ( 
        <Container>
            <div className="top">
                <h2> Sign-In </h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label><br/>
                        <input type="email" id="loginusername" onChange={e => setEmail(e.target.value)} placeholder="Enter email" required/><br/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <label> Password </label><br/>
                        <input type="password" id="loginpwd" minLength="3" onChange={e => setPassword(e.target.value)} placeholder="Password" required/><br/>
                    </Form.Group>
                    <input type="submit" value="Login" onClick={handleClick}/>
                </Form>
            </div>
        </Container>
    );
}
 
export default Login;