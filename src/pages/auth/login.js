/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Image from '../../assets/Images/2919625.jpg';
import './index.scss';
import { useDispatch } from 'react-redux';
import { loginAuth  } from '../../redux/services/auth';

const login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const signUp = (data) => dispatch(loginAuth(data));

    const submit = async (data) => {
        try {
            signUp(data);
            navigate('/validation');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-container-left">
                <div className="auth-container-left-row">
                    <p className="auth-container-left-header">Login</p>
                    <p className="auth-container-left-body">welcome back</p>
                    <form className="auth-container-form" onSubmit={handleSubmit(submit)}>
                        <div className="auth-container-form__group">
                            <label className="auth-container-form__label">email</label>
                            <input
                                className="auth-container-form__input"
                                type="email"
                                placeholder="Email address"
                                {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                            {errors.email && <p>Please check the Email</p>}
                        </div>

                        <div className="auth-container-form__group">
                            <label className="auth-container-form__label">password</label>
                            <input
                                className="auth-container-form__input"
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

                        <div className="auth-container-form__bottom auth-container-left-body">
                            <div className="auth-container-form__check">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <Link to="/forgot-Password" className="auth-container-left-link">Forgot password?</Link>
                        </div>

                        <button className="auth-container-form-button">Login</button>

                        <p className="auth-container-left-body">Not registered yet?
                            <span>
                                <Link to="/signup" className="auth-container-left-link">Create an Account</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
            <img className="auth-container-right" src={Image} alt="image" />
        </div>
    )
}

export default login;