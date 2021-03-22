import {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../redux/authSlice';

const Login = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = async (e) => {
        e.preventDefault(); 
        try{
            const loginData = {email, password};
            console.log(loginData, typeof loginData);
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
        <div>
            <h2> Login </h2>
            <form>
                <label> Email </label><br/>
                <input type="email" id="loginusername" onChange={e => setEmail(e.target.value)} required/><br/>
                <label> Password </label><br/>
                <input type="password" id="loginpwd" minLength="3" onChange={e => setPassword(e.target.value)} required/><br/><br/>
                <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
        </div>
    );
}
 
export default Login;