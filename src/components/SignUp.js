import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const res = axios.post('http://localhost:3000/users', {
        username: username,
        password: password,
        email: email
    })

    return(
        <form>
        <div>
            <label>Username</label>
            <input 
                type='text'
                onChange={() => setUsername()}
            />
            <br/>
            
            <label>Password</label>
            <input 
                type='text'
                onChange={() => setPassword()}
            />
            <br/>
            
            <label>Confirm Password</label>
            <input type='text'/>

            <br/>

            <label>Email</label>
            <input 
                type='text'
                onChange={() => setEmail()}
            />
            <br/>

            <button>Join!</button>
        </div>
        </form>
    )
}

export default Signup