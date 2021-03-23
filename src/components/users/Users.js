import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router';
import {getUsers} from '../../redux/getUsersSlice';
import {useHistory} from 'react-router-dom';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);

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

    return (  
        <div className="users">
            <h2> Users List </h2>
            {users.map((ele) => (
                <div className="indv-user" key={ele.id}>
                    <h4>User Name: {ele.name}</h4>
                    <p>email : {ele.email}</p>
                    <p>password : {ele.password}</p>
                    <p>role : {ele.role}</p>
                    <button onClick={() => handleUpdate(ele._id)}>update</button>
                    <button>delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Users;