import React, { useState } from 'react'
import LoginForm from './LoginForm';
import { Button } from '../../components/Button'
import './LoginForm.css'

function Login() {

    const adminUser = {
        email: "mail-mail@lol.ez",
        password: "haslo123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password) {
        console.log("Logged in!")
        setUser({
        name: details.name,
        email: details.email
        })
    } else {
        console.log("Wrong login or password")
        setError("Something is wrong!")
    }
    }

    const Logout = () => {
    setUser({name: "", email: ""})
    }

    return (
    <div className="form-center">
        {/* Login form */}
        {user.email != "" ? (
            <div className='welcome'>
                <h2> Welcome, <span>{user.name}</span></h2>
                <Button onClick={Logout}>Logout</Button>
            </div> 
        ) : ( 
            <LoginForm Login={Login} error={error}/> 
        )}
        </div>
    )
}

export default Login