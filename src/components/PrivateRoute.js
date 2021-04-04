import {Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute ({ component: Component, name}){
    const isLoggedIn = useSelector(state => state.isLoggedIn.value);

    //console.log("inside privateRoute:", name)

    return (  
        <Route render={() => {
            return isLoggedIn
              ? <Component/>
              : <Redirect to={{pathname:'/login', state:{comp: name}}}/>
          }} />
    );
}
 
export default PrivateRoute;