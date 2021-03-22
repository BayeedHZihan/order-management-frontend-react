const CreateUser = () => {
    return (  
        <div>
            <h2> Create User </h2>
            <form>
                <label> UserName </label><br/>
                <input type="text" id="username" required/><br/>
                <label> Email </label><br/>
                <input type="email" id="useremail" required/><br/>
                <label> Password </label><br/>
                <input type="password" id="userpwd" minLength="3" required/><br/>
                <label> Role </label><br/>
                <input type="text" id="role" required/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}
 
export default CreateUser;