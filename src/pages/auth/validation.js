/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './forgot-password.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { secondAuth } from '../../redux/services/auth';
import { QuestionAPI } from '../../redux/services/APIs';
import Client from '../../utils/HTTPClient';


const validation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let questionId = '';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [question, setQuestion] = useState('');

    const validateUser = (data) => dispatch(secondAuth(data));

    const fetchQuestion = async () => {
        const client = new Client(QuestionAPI);

        const res = await client.get(questionId);
        console.log("question ->",res.data.question)
        setQuestion(res.data.question)
    }

    useSelector(state => {
        console.log(state);
        questionId = state.auth.questionId;
    });

    useEffect(() => {
        fetchQuestion();
    }, [])


    const submit = async (data) => {
        try {
            validateUser(data)
            navigate('/home');
        } catch (error) {
            console.error(error);
        }

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
                        placeholder="secretAnswer"
                        {...register("secretAnswer", {
                            required: true,
                        })}
                    />
                    {errors.secretAnswer && <p>Please check the answer</p>}
                </div>

                <div className="password-form__group">
                    <label className="password-form__label">OTP</label>
                    <input
                        type="text"
                        className="form-control password-form__input"
                        placeholder="11111"
                        {...register("OTPCode", {
                            required: true,
                        })}
                    />
                    {errors.OTPCode && <p>Please check the otp</p>}
                </div>
                <div>
                    <button className="password-form-button">submit</button>
                </div>
            </form>
        </div>
    )
}

export default validation;