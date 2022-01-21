/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './forgot-password.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const validation = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)
        navigate('/home')
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
                        {...register("secretQuestion", {
                            required: true,
                        })}
                    />
                    {errors.secretQuestion && <p>Please check the secret question</p>}

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