/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React from 'react';
import './forgot-password.scss';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verify } from '../../redux/services/auth';


const verification = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let email = '';
    
    useSelector(state => {
        email = state?.user?.email
    })

    const { register, handleSubmit, formState: { errors } } = useForm();

    const verifyUser = (data) => dispatch(verify(data))
    console.log(email)

    //data an object with OTPCode and email properties;
    const submit = async (data) => {
        try {
            data.email = email;
            console.log(data)
            verifyUser(data)
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
  
    }

    return (
        <div className="password">
            <p className="password-header">Verification</p>
            <p className="password-subheader">Enter the OTP that has been sent to your <span style={{ textTransform: "lowercase" }}>{email}</span>.</p>

            <form className="password-form" onSubmit={handleSubmit(submit)}>
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
                    {errors.OTPCode && <p>Please check the OTP code</p>}
                </div>
                <div>
                    <button className="password-form-button">Verify</button>
                </div>
            </form>
            <div>
                <Link className="password-body" to="/login">back to login</Link>
            </div>
        </div>
    )
}

export default verification
