import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import '../styles/AppNavbar.css';

const AppNavbar = () => {
    return (  
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/" className="navTitle">Order Management</Link></Navbar.Brand>
        </Navbar>
    );
}
 
export default AppNavbar;