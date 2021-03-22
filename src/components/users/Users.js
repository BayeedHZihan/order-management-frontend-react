import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../redux/getUsersSlice';

const Users = () => {
    // const [array, setArray] = useState([
    //     {
    //         id: 1,
    //         name: "jack",
    //         email: "jack@jack.com",
    //         password: "jack", 
    //         role: "user"
    //     },
    //     {
    //         id: 2,
    //         name: "mormon",
    //         email: "mormon@mormon.com",
    //         password: "mormon", 
    //         role: "admin"
    //     },
    //     {
    //         id: 3,
    //         name: "hazle",
    //         email: "hazle@hazle.com",
    //         password: "hazle", 
    //         role: "super admin"
    //     }
    // ]);

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    return (  
        <div className="users">
            <h2> Users List </h2>
            {users.map((ele) => (
                <div className="indv-user" key={ele.id}>
                    <h4>User Name: {ele.name}</h4>
                    <p>email : {ele.email}</p>
                    <p>password : {ele.password}</p>
                    <p>role : {ele.role}</p>
                    <button>update</button>
                    <button>delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default Users;