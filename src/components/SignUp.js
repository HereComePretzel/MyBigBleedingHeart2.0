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
        <div>
            <label>Username</label>
            <input 
                type='text'
                onChange={() => setUsername()}
            />
            
            <label>Password</label>
            <input 
                type='text'
                onChange={() => setPassword()}
            />
            
            <label>Confirm Password</label>
            <input type='text'/>

            <label>Email</label>
            <input 
                type='text'
                onChange={() => setEmail()}
            />
            
            <button>Join!</button>
        </div>
    )
}

export default Signup