import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            <div className="sidenav">
                <div className="login-main-text">
                <h2>Stock Info</h2>
                <p>Login or register from here to access.</p>
                </div>
            </div>
            <div className="main">
            <div className="col-md-6 col-sm-12">
            <div className="login-form">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="User Name"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-black">Login</button>
                    <button type="submit" className="btn btn-secondary">Register</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Login;