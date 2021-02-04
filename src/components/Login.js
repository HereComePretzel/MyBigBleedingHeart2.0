import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)



    return(
        <div>
           <label>Username</label>
           <br />
           <input type='text'/>
           <br />
           <label>Password</label>
           <br />
           <input type='text'/>
           <br />
           <Link to='/dashboard'><button>Login</button></Link> 
           <br />
           <Link to='/signup'><button>Signup</button></Link>
        </div>
    )
}

export default Login