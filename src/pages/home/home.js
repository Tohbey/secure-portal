import React from 'react';
import Dashboard from '../../container/dashboard';
import { useForm } from 'react-hook-form';
import './home.scss'

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submit = (data) => {
        console.log(data)
    }

    return (
        <Dashboard>
            <div className="home">
                <p className="home-header">Upload Document</p>
                <form className="home-form" onSubmit={handleSubmit(submit)}>
                    <div className="home-form__group">
                        <label className="home-form__label">Select document to upload</label>
                        <input 
                            className="home-form__input" 
                            type="file"
                            {...register("document", {
                                required: true,
                            })}
                        />
                        {errors.document && <p>Document is required</p>}
                    </div>
                    <div className="home-form__group">
                        <label className="home-form__label">Description</label>
                        <textarea 
                            className="home-form__input"
                            placeholder="description"
                            {...register('description',{
                                required: true,
                            })}
                        ></textarea>
                        {errors.description && <p>Description is required</p>}
                    </div>
                    <button className="home-form-button">upload</button>
                </form>
            </div>
        </Dashboard>
    )
}

export default Home
