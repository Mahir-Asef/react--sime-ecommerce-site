import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Register : Create Account</h2>
                <form onSubmit="">
                <input type="email" placeholder="your email" />
                <br />
                <input type="password" placeholder="your password" />
                <br />
                <input type="password" placeholder="Re-enter your password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account ?<Link to="/login">Log In</Link></p>
            <div>----------or---------------</div>
            <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;<div>
<h2>Register : Create Account</h2></div>