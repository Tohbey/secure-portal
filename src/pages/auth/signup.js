/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { QuestionAPI } from '../../redux/services/APIs';
import Image from '../../assets/Images/2919625.jpg';
import './index.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/services/user';


const signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registerUser = (data) => dispatch(createUser(data))

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [questions, setQuestions] = useState(null);

    const fetchQuestions = async () => {
        const res = await axios.get(QuestionAPI);
        setQuestions(res.data.data);
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    const submit = async (data) => {
        try {
            registerUser(data);
            navigate('/verify');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className="auth-container">
                <div className="auth-container-left">
                    <div className="auth-container-left-row">
                        <p className="auth-container-left-header">Sign up</p>
                        <p className="auth-container-left-body">welcome back</p>
                        <form className="auth-container-form" onSubmit={handleSubmit(submit)}>
                            <div className="auth-container-form__group">
                                <label className="auth-container-form__label">Surname</label>
                                <input
                                    className="auth-container-form__input"
                                    type="text"
                                    placeholder="surname"
                                    {...register("surname", {
                                        required: true,
                                    })}
                                />
                                {errors.surname && <p>Surname is required</p>}
                            </div>

                            <div className="auth-container-form__group">
                                <label className="auth-container-form__label">othernames</label>
                                <input
                                    className="auth-container-form__input"
                                    type="text"
                                    placeholder="othernames"
                                    {...register("othernames", {
                                        required: true,
                                    })}
                                />
                                {errors.othernames && <p>Othernames is required</p>}
                            </div>

                            <div className="auth-container-form__group">
                                <label className="auth-container-form__label">email</label>
                                <input
                                    className="auth-container-form__input"
                                    type="email"
                                    placeholder="email"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors.email && <p>email is required</p>}
                            </div>

                            <div className="auth-container-form__group">
                                <label className="auth-container-form__label">password</label>
                                <input
                                    className="auth-container-form__input"
                                    type="password"
                                    placeholder="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                {errors.password && <p>password is required</p>}
                            </div>

                            <div className="auth-container-form__group">
                                <label className="auth-container-form__label">secret question</label>
                                <select
                                    className="auth-container-form__input"
                                    type="text"
                                    placeholder="questionId"
                                    {...register("questionId", {
                                        required: true,
                                    })}
                                >

                                    {!questions ? null : questions.map((question, key) => (
                                        <option value={question.id} key={key}>{question.question}</option>
                                    ))}
                                </select>
                                {errors.questionId && <p>Question is required</p>}
                            </div>

                            <div className="auth-container-form__group">
                                <label className="auth-container-form__label">Answer</label>
                                <input
                                    className="auth-container-form__input"
                                    type="answer"
                                    placeholder="answer"
                                    {...register("secretAnswer", {
                                        required: true,
                                    })}
                                />
                                {errors.secretAnswer && <p>answer is required</p>}
                            </div>

                            <button className="auth-container-form-button">Sign up</button>

                            <p className="auth-container-left-body">
                                <span>
                                    Have an Account? 
                                    <Link to="/login" className="auth-container-left-link">Sign in</Link>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
                <img className="auth-container-right" src={Image} alt="image" />
            </div>
        </div>
    )
}

export default signup;