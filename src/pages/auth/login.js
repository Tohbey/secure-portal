/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './index.scss';


const login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();


    const submit = (data) => {
        console.log(data)
    }

    return (
        <div className="container">
            <div className="container-left">
                <div className="container-left-row">
                    <p className="container-left-header">Login</p>
                    <p className="container-left-body">welcome back</p>
                    <form className="container-form" onSubmit={handleSubmit(submit)}>
                        <div className="container-form__group">
                            <label className="container-form__label">email</label>
                            <input 
                                className="container-form__input" 
                                type="email" 
                                {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                            {errors.email && <p>Please check the Email</p>}
                        </div>

                        <div className="container-form__group">
                            <label className="container-form__label">password</label>
                            <input 
                                className="container-form__input" 
                                type="password" 
                                {...register("password",
                                {
                                    required: true,
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                })}
                            />
                            {errors.password && <p>Please check the Password</p>}
                        </div>

                        <div className="container-form__bottom container-left-body">
                            <div className="container-form__check">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <Link to="/auth/forgot-Password" className="container-left-link">Forgot password?</Link>
                        </div>

                        <button className="container-form-button">Login</button>

                        <p className="container-left-body">Not registered yet?
                            <span>
                                <Link to="/auth/signup" className="container-left-link">Create an Account</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
            <div className="container-right">

            </div>
        </div>
    )
}

export default login;