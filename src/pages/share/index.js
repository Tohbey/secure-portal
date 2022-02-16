/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useForm } from 'react-hook-form';
import Dashboard from '../../container/dashboard';
import './index.scss';

const shareDocuments = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)
    }

    return (
        <Dashboard>
        <div className="share">
            <p className="share-header">Share Documents</p>
            <form className="share-form">
                <div className="share-form__group">
                    <label className="share-form__label">Document</label>
                    <select name="document" className="share-form__input" >
                        <option>testing</option>
                        <option>testing</option>
                        <option>testing</option>
                    </select>
                </div>
                <div className="share-form__group">
                    <label className="share-form__label">User</label>
                    <select name="user" className="share-form__input" >
                        <option>testing@gmail.com</option>
                        <option>testing@gmail.com</option>
                        <option>testing@gmail.com</option>
                    </select>
                </div>
                <div className="share-form__group">
                    <label className="share-form__label">Permission</label>
                    <select name="permission" className="share-form__input" >
                        <option>read</option>
                        <option>write</option>
                        <option>read and write</option>
                    </select>
                </div>
                <div className="share-form__group">
                    <label className="share-form__label">Message</label>
                    <input type="text" className="share-form__input" />
                </div>
                <button className="share-form-button">Share</button>
            </form>
        </div>
    </Dashboard>
    )
}

export default shareDocuments;
