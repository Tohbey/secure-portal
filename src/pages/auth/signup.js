/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Image from '../../assets/Images/2919625.jpg';
import './index.scss';

const signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const submit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="container">
                <div className="container-left">
                    <div className="container-left-row">
                        <p className="container-left-header">Sign up</p>
                        <p className="container-left-body">welcome back</p>
                        <form className="container-form" onSubmit={handleSubmit(submit)}>
                            <div className="container-form__group">
                                <label className="container-form__label">Surname</label>
                                <input 
                                    className="container-form__input" 
                                    type="text" 
                                    placeholder="surname"
                                    {...register("surname", {
                                        required: true,
                                    })}
                                />
                                {errors.surname && <p>Surname is required</p>}
                            </div>

                            <div className="container-form__group">
                                <label className="container-form__label">othernames</label>
                                <input 
                                    className="container-form__input" 
                                    type="text" 
                                    placeholder="othernames"
                                    {...register("othernames", {
                                        required: true,
                                    })}
                                />
                                {errors.othernames && <p>Othernames is required</p>}
                            </div>

                            <div className="container-form__group">
                                <label className="container-form__label">email</label>
                                <input 
                                    className="container-form__input" 
                                    type="email" 
                                    placeholder="email"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors.email && <p>email is required</p>}
                            </div>

                            <div className="container-form__group">
                                <label className="container-form__label">password</label>
                                <input 
                                    className="container-form__input" 
                                    type="password" 
                                    placeholder="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors.password && <p>password is required</p>}
                            </div>

                            <div className="container-form__group">
                                <label className="container-form__label">secret question</label>
                                <input 
                                    className="container-form__input" 
                                    type="text" 
                                    placeholder="secretQuestion"
                                    {...register("secretQuestion", {
                                        required: true,
                                    })}
                                />
                                {errors.secretQuestion && <p>secretQuestion is required</p>}
                            </div>

                            <div className="container-form__group">
                                <label className="container-form__label">Answer</label>
                                <input 
                                    className="container-form__input" 
                                    type="answer" 
                                    placeholder="answer"
                                    {...register("answer", {
                                        required: true,
                                    })}
                                />
                                {errors.answer && <p>answer is required</p>}
                            </div>

                            <button className="container-form-button">Sign up</button>

                            <p className="container-left-body">
                                <span>
                                    <Link to="/auth/login" className="container-left-link">Have an Account</Link>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
                <img className="container-right" src={Image} alt="image" />
            </div>
        </div>
    )
}

export default signup;