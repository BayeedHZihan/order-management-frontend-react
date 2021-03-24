import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router';
import {getUsers} from '../../redux/getUsersSlice';
import {useHistory} from 'react-router-dom';

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
                    //window.location.reload(false)      <- this works but have to re login bc the page reloads
                    history.push("/");
                })
        }
        catch(e){console.log(e)};
    }

    return (  
        <div className="users">
            <h2> Users List </h2>
            {users.map((ele) => (
                <div className="indv-user" key={ele._id}>
                    <h4>User Name: {ele.name}</h4>
                    <p>email : {ele.email}</p>
                    <p>password : {ele.password}</p>
                    <p>role : {ele.role}</p>
                    <button onClick={() => handleUpdate(ele._id)}>update</button>
                    <button onClick={() => handleDelete(ele._id)}>delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Users;