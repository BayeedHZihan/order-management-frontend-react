import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router';
import {getUsers} from '../../redux/getUsersSlice';
import {useHistory} from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const axios = require('axios');

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);

    const [deleteRefresher, setdeleteRefresher] = useState(0);

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    let history = useHistory();

    const handleUpdate = userId => {
        history.push({
            pathname: '/update-user',
            state: { id: userId }
        });
    }

    const handleDelete = userId => {
        try{
            axios.delete(`http://localhost:5000/users/${userId}`)
                .then(() => {
                    history.push("/");
                })
        }
        catch(e){console.log(e)};
    }

    return (  
        <Container>
            <div className="users mt-4 mb-2">
                <h2> Users List </h2>
                <ListGroup>
                    {users.map((ele) => (
                        
                        <Card className="mb-3" bg="info">
                            <div className="indv-user pt-3 pb-3" key={ele._id}>
                                <Card.Subtitle>User Name: {ele.name}</Card.Subtitle>
                                <Card.Text>email : {ele.email}</Card.Text>
                                <Card.Text>role : {ele.role}</Card.Text>
                                <Button onClick={() => handleUpdate(ele._id)} variant="outline-warning" size="sm">update</Button>{' '}
                                <Button onClick={() => handleDelete(ele._id)} variant="outline-danger" size="sm">delete</Button>
                            </div>
                        </Card>
                        
                    ))}
                </ListGroup>
            </div>
        </Container>
    );
}
 
export default Users;