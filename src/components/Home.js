import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
    // different states for different users
    // if allstate || rightState then ouput route in the list

    const [pages, setPages] = useState([
        {url: '/create-user', id: 0},
        {url: '/get-users', id: 2}
    ]);

    const [userPages, setUserPages] = useState([
        {url: '/get-products', id: 3},
        {url: '/place-order', id: 4}
    ]);
    const [adminPages, setAdminPages] = useState([
        {url: '/get-orders', id: 5}
    ]);
    const [superPages, setSuperPages] = useState([
        {url: '/create-product', id: 7},
        {url: '/order-summary', id: 8}
    ]);
    

    const role = useSelector(state => state.isLoggedIn.userRole);
    //console.log(role);


    return (  
        <div> 
            <h2>List of pages you can access</h2> 
            <ul>
            {
                
                pages.map((page) => (
                    <li style={{marginTop: "20px"}} key={page.id}>
                        <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                    </li>  
                ))
                
            }

            {role==='user' && userPages.map((page) => (
                <li style={{marginTop: "20px"}} key={page.id}>
                    <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                </li>  
            ))}
            {role==='admin' && adminPages.map((page) => (
                <li style={{marginTop: "20px"}} key={page.id}>
                    <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                </li>  
            ))}
            {role==='super admin' && superPages.map((page) => (
                <li style={{marginTop: "20px"}} key={page.id}>
                    <Link to={`${page.url}`}>{page.url.substring(1)}</Link>
                </li>  
            ))}
            </ul>

        </div>
    );
}
 
export default Home;