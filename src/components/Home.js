import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import '../styles/Home.css';

const Home = () => {

    const [pages] = useState([
        {url: '/create-user', id: 0},
        {url: '/get-users', id: 2}
    ]);

    const [userPages] = useState([
        {url: '/get-products', id: 3},
        {url: '/place-order', id: 4}
    ]);
    const [adminPages] = useState([
        {url: '/get-orders', id: 5}
    ]);
    const [superPages] = useState([
        {url: '/create-product', id: 7},
        {url: '/order-summary', id: 8}
    ]);
    

    const role = useSelector(state => state.isLoggedIn.userRole);
    //console.log(role);


    return (  
        <Container>
            <div className="homeTop"> 
                <h2>List of pages you can access</h2> 
                <ListGroup  variant="flush" className="linkTexts">
                {
                    
                    pages.map((page) => (
                        <ListGroup.Item style={{marginTop: "20px"}} key={page.id}>
                            <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                        </ListGroup.Item>  
                    ))
                    
                }

                {role==='user' && userPages.map((page) => (
                    <ListGroup.Item style={{marginTop: "20px"}} key={page.id}>
                        <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                    </ListGroup.Item>  
                ))}
                {role==='admin' && adminPages.map((page) => (
                    <ListGroup.Item style={{marginTop: "20px"}} key={page.id}>
                        <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                    </ListGroup.Item>  
                ))}
                {role==='super admin' && superPages.map((page) => (
                    <ListGroup.Item style={{marginTop: "20px"}} key={page.id}>
                        <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                    </ListGroup.Item>  
                ))}
                </ListGroup>

            </div>
        </Container>
    );
}
 
export default Home;