/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './forgot-password.scss';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { secondAuth } from '../../redux/services/auth';
import axios from 'axios';
import { QuestionAPI } from '../../redux/services/APIs';


const validation = () => {
    const dispatch = useDispatch();
    let questionId = '';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [question, setQuestion] = useState('');
    
    const validateUser = (data) => dispatch(secondAuth(data));

    const fetchQuestion = async() => {
        const res = await axios.get(QuestionAPI +questionId)
        setQuestion(res.data.question)
    }

    useSelector(state => {
        questionId = state.auth.questionId
        console.log(questionId);
    });

    useEffect(() => {
        fetchQuestion()
    }, [])


    const submit = (data) => {
        console.log(data)
    }

    return (
        <div className="password">
            <p className="password-header">Validation</p>
            <p className="password-subheader">Enter the OTP that has been sent to your email and the answer to your secret question.</p>

            <form className="password-form" onSubmit={handleSubmit(submit)}>
                <div className="password-form__group">
                    <label className="password-form__label">Secret Question</label>
                    <input
                        type="text"
                        className="form-control password-form__input"
                        placeholder="secret question"
                        value={question}
                        readOnly={true}
                    />

                </div>

                <div className="password-form__group">
                    <label className="password-form__label">Answer</label>
                    <input
                        type="text"
                        className="form-control password-form__input"
                        placeholder="answer"
                        {...register("answer", {
                            required: true,
                        })}
                    />
                    {errors.answer && <p>Please check the answer</p>}
                </div>

                <div className="password-form__group">
                    <label className="password-form__label">OTP</label>
                    <input
                        type="text"
                        className="form-control password-form__input"
                        placeholder="11111"
                        {...register("otp", {
                            required: true,
                        })}
                    />
                    {errors.otp && <p>Please check the otp</p>}
                </div>
                <div>
                    <button className="password-form-button">submit</button>
                </div>
            </form>
        </div>
    )
}

export default validation;