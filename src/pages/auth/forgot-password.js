/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './forgot-password.scss'

const ForgotPassword = () => {
    const [isPassword, setstateIsPassword] = useState(true)
    return (
        <div className="main">
            {
                isPassword ? 
                <div className="password">
                    <p className="password-header">Forgot Password</p>
                    <p className="password-subheader">Enter Your Email Address</p>
                    <p className="password-body" >
                        Check your mail and follow the steps
                    </p>
                    <form className="password-form">
                        <div className="password-form__group">
                            <label className="password-form__label">Email address</label>
                            <input
                                type="email"
                                className="form-control password-form__input"
                                placeholder="Email address"
                                id="email"
                                required
                            />

                        </div>
                        <div>
                            <button className="password-form-button" >Submit</button>
                        </div>
                    </form>
                    <div>
                        <Link className="password-body" to="/auth/login">back to login</Link>
                    </div>
                </div> 
                :
                <div className="password" >
                    <p className="password-header">Forgot Password</p>
                    <p className="password-body">Enter New Password</p>
                    <form className="password-form">
                        <div className="password-form__group">
                            <label className="password-form__label">Password</label>
                            <input
                                className="form-control password-form__input"
                                placeholder="password"
                                id="password"
                                name="password"
                                type="password"
                                required
                            />
                        </div>
                        <div>
                            <button className="password-form-button btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            }

        </div>
    )
}

export default ForgotPassword;