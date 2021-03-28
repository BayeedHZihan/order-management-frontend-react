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

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    const handleClick = async (e) => {
        e.preventDefault(); 
        try{
            const loginData = {email, password};
            const res = await axios.post('/login', loginData);
            if (res) {
                //console.log(res.data.token)
                const decoded = jwt_decode(res.data.token);
                // console.log(decoded)
                
                // console.log(users);

                for (let i=0; i<users.length; i++){
                    if (users[i]._id === decoded.id) {
                        if (users[i]?.role){
                            setRole(users[i].role);
                        }
                        //console.log("this is it", users[i].role)
                        break;
                    }
                }

                //console.log(ref.current)

                dispatch(login(ref.current));
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