import React from 'react';
import './forgot-password.scss';
import { useForm } from 'react-hook-form';

const verification = () => {
    const {register, handleSubmit, formState: {errors}} = useForm;

    const submit = (data) => {
        console.log(data)
    }

    return (
        <div className="password">
            <p className="password-header">Verification</p>
            <p>Welcome Email</p>
            <p className="password-subheader">Enter the OTP that has been sent to your email and the answer to your secret question.</p>

            <form className="password-form" onSubmit={handleSubmit(submit)}>
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
                    <button className="password-form-button">Verify</button>
                </div>
            </form>
        </div>
    )
}

export default verification
