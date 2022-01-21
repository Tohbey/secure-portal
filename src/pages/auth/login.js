/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Image from '../../assets/Images/2919625.jpg';
import './index.scss';


const login = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const submit = (data) => {
        console.log(data)
        navigate('/validation');
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
                                placeholder="Email address"
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
                                placeholder="********"
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
                            <Link to="/forgot-Password" className="container-left-link">Forgot password?</Link>
                        </div>

                        <button className="container-form-button">Login</button>

                        <p className="container-left-body">Not registered yet?
                            <span>
                                <Link to="/signup" className="container-left-link">Create an Account</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
            <img className="container-right" src={Image} alt="image"/>
        </div>
    )
}

export default login;