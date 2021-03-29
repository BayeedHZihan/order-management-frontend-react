import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import '../styles/AppNavbar.css';
import logo from '../assets/logo.png'

const AppNavbar = () => {
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
        </Navbar>
    );
}
 
export default AppNavbar;