import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/getProductsSlice';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const GetProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.products.list);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (  
        <Container>
            <div className="mt-4 mb-2">
                <h2> Products List </h2>
                <ListGroup>
                    {data && data.map((product) => (
                        <Card className="mb-3" bg="info"  key={product._id}>
                            <div className= "pt-3 pb-3">
                                
                                <Card.Subtitle>Title : {product.title}</Card.Subtitle>
                                <Card.Text>price : {product.price}</Card.Text>
                                {product.description && <p>description : {product.description}</p>}
                                {product.category && <p>category : {product.category}</p>}
                                {product.image && <p>image : {product.image}</p>}
                                
                            </div>
                        </Card>
                    ))}
                </ListGroup>
            </div>
        </Container>
    );
}
 
export default GetProducts;