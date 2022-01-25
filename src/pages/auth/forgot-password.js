/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './forgot-password.scss';
import { recover, resetPassword } from '../../redux/services/auth';
import { useForm } from 'react-hook-form';


const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const recoverPassword = (data) => dispatch(recover(data));
    const reset = (data) => dispatch(resetPassword(data));
    //getting params
    let params = useParams();
    const email = params.email;
    const token = params.token;


    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(email, token)

    const submit = async (data) => {
        try {
            console.log(data)
            recoverPassword(data);
        } catch (error) {
            console.error(error);
        }
    }

    const update = async (data) => {
        try {
            data.email = email;
            data.token = token;
            console.log(data)
            reset(data);
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="main">
            {
                (!email && !token) ?
                    <div className="password">
                        <p className="password-header">Forgot Password</p>
                        <p className="password-subheader">Enter Your Email Address</p>
                        <p className="password-body" >
                            Check your mail and follow the steps
                        </p>
                        <form className="password-form" onSubmit={handleSubmit(submit)}>
                            <div className="password-form__group">
                                <label className="password-form__label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control password-form__input"
                                    placeholder="Email address"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                                />
                                {errors.email && <p>Please check the Email</p>}
                            </div>
                            <div>
                                <button className="password-form-button" >Submit</button>
                            </div>
                        </form>
                        <div>
                            <Link className="password-body" to="/login">back to login</Link>
                        </div>
                    </div>
                    :
                    <div className="password" >
                        <p className="password-header">Forgot Password</p>
                        <p className="password-subheader">Welcome  <span style={{ textTransform: "lowercase" }}>{email}</span></p>
                        <p className="password-body">Enter New Password</p>
                        <form className="password-form" onSubmit={handleSubmit(update)}>
                            <div className="password-form__group">
                                <label className="password-form__label">Password</label>
                                <input
                                    className="form-control password-form__input"
                                    placeholder="*********"
                                    type="password"
                                    id="password"
                                    {...register("password",
                                        {
                                            required: true,
                                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                        })}
                                />
                                {errors.password && <p>Please check the Password</p>}
                            </div>
                            <div>
                                <button className="password-form-button btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
            }

        </div>
    )
}

export default ForgotPassword;