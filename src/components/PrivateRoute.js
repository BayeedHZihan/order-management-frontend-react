import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute ({ component: Component}){
    const isLoggedIn = useSelector(state => state.isLoggedIn.value);
    console.log("in privateroute: " , isLoggedIn)
    return (  
        <Route render={() => {
            return isLoggedIn
              ? <Component/>
              : <Redirect to='/login' />
          }} />
    );
}
 
export default PrivateRoute;