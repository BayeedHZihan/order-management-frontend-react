import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/authSlice'

import '../styles/AppNavbar.css';
import logo from '../assets/logo.png'

const AppNavbar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn.value);

    const handleLogout = async () => {
        const res = axios.get('http://localhost:5000/logout');
        if (res) dispatch(logout());
    }

    return (  
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="ml-5">
                <Link to="/" className="navTitle">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mr-2"
                    alt="React Bootstrap logo"
                />
                    Order Management
                </Link>
            </Navbar.Brand>
            <Nav className="ml-auto">
                {isLoggedIn && <Link to="/logout" onClick={handleLogout}><p className="navLink mt-3 mr-3">Logout</p></Link>}
                <Link to="/get-products"><p className="navLink mt-3">Products</p></Link>
                <Link to="/go-to-cart"><p className="navLink mt-3 ml-3">Cart</p></Link>
            </Nav>
        </Navbar>
    );
}
 
export default AppNavbar;