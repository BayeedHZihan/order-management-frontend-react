import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    // different states for different users
    // if allstate || rightState then ouput route in the list
     
    const [pages, setPages] = useState([
        '/create-user',
        '/update-user',
        '/get-users',
        '/create-product',
        '/get-products',
        '/get-orders',
        '/place-order',
        '/order-summary',
        '/update-status'
    ]);
    const [role, setRole] = useState(null);

    useEffect(() => {
        //setRole to current user/admin/s.a
    },[]);

    return (  
        <div> 
            <h2>List of pages you can access</h2> 
            <ul>
            {
                
                pages.map((page) => (
                    <li style={{marginTop: "20px"}}>
                        <Link to={`${page}`}>{page.substring(1)}</Link>
                    </li>  
                ))
                
            }
            </ul>

        </div>
    );
}
 
export default Home;