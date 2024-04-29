import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [eye, setEye] = useState(false);
    const [type, setType] = useState('password');
    const history = useNavigate();
    const passwordInputRef = useRef(null);

    function handleEye(){
        if(eye){
            setEye(false);
            setType('password');
        }
        else{
            setEye(true);
            setType('text');
        } 
    }
    function handleSubmit(event) {
        event.preventDefault(); 
        console.log("submit");
        axios.post('http://localhost:8081/login', { username, password })
            .then(res => {
                console.log(res);
                if (res.data === "Login Successful") {
                    setError('');
                    history("/addroute");
                } else {
                    setError('Invalid Login Details!');
                    setPassword('');
                    passwordInputRef.current.value = ''; 
                }
            })
            .catch(err => {
                console.log(err);
                setError('Error Fetching the Data!');
            });
    } 

    return (
        <div className='login_body'>
            <div className='login_container'>
                <h1 className='login_head'>Login Form</h1>
                <form onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                    <div className='login_inputs'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' required placeholder='Username' onChange={e => setUserName(e.target.value)}></input>
                    </div>
                    <div className='login_inputs'>
                        <label htmlFor='password'>Password</label>
                        <div className='temp'>
                        <input type={type} required placeholder='Password'  onChange={e => setPassword(e.target.value)} ref={passwordInputRef}>
                        </input>
                        {eye ? <div className='img2' onClick={handleEye}></div> : <div className='img1' onClick={handleEye}></div>}
                        {/* <button className="img" ></button> */}
                        </div>
                    </div>
                    <div className="login_btn">
                        <button type="submit">Login</button>
                    </div>
                    {error!=''? <div className='login_err'>
                        <label>
                        Invalid Login Details!
                        </label>
                    </div> :
                    null}
                    
                </form>
            </div>
        </div>
    );
}

export default Login;
