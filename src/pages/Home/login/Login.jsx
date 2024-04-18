import React from 'react'

export default function Login() {
  return (
    <>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Facebook.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <span className="loginForget">Forget Password</span>
                        <button className='loginRegisterButton'>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    </>  
    )
}
