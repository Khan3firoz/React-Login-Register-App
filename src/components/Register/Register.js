import React,{useState} from 'react';
import './Register.css';
import axios from 'axios'

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmedPassword:""
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () => {
        const { name, email, password, confirmedPassword } = user;
        if (name && email && password && ( password === confirmedPassword )) {
            axios.post("http://localhost:9002/register", user)
            .then(res=>console.log(res))
            // alert("User Register succesfully")
        } else {
            alert("Please fill all details correctaly")
        }
    }
    return (
        <div className="register">
            {console.log("user",user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="your name" onChange={handleChange} />
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}/>
            <input type="password" name="confirmedPassword" value={user.confirmedPassword} placeholder="Confirm Password" onChange={handleChange}/>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register
