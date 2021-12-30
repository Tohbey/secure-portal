import React from 'react';
import './forgot-password.scss';


const validation = () => {
    return (
        <div className="password">
            <p className="password-header">Validation</p>
            <p className="password-subheader">Enter the OTP that has been sent to your email and the answer to your secret question.</p>
            
            <form className="password-form">
                <div className="password-form__group">
                    <label className="password-form__label">Secret Question</label>
                    <input
                        type="text"
                        className="form-control password-form__input"
                        placeholder="secret question"
                        id="otp"
                        required
                    />
                </div>
                
                <div className="password-form__group">
                    <label className="password-form__label">Answer</label>
                    <input
                        type="text"
                        className="form-control password-form__input"
                        placeholder="answer"
                        id="otp"
                        required
                    />
                </div>

                <div className="password-form__group">
                    <label className="password-form__label">OTP</label>
                    <input
                        type="text"
                        className="form-control password-form__input"
                        placeholder="11111"
                        id="otp"
                        required
                    />
                </div>
                <div>
                    <button className="password-form-button">Verify</button>
                </div>
            </form>
        </div>
    )
}

export default validation;