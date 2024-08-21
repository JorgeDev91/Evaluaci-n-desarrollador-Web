import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-gobierno.jpg';

export const LogInForm = () => {

    const { register, handleSubmit, formState: { errors }  } = useForm();
    const navigate = useNavigate();
    
    //  Formulario y login con correo y password
    const onSubmit = () => {

        document.getElementById('inputName').value = "";         //limpio el textbox del Nombre
        document.getElementById('inputEmail').value = "";         //limpio el textbox del email
        document.getElementById('inputPassword').value = "";      // limpio el textbox de password
        navigate('/projects', {replace: true});
    };

    const onHandleSignIn = () => { 
        navigate('/signIn', {replace: true});
    }
        
    return (
        <>
        
                <div style={{overflow: 'hidden'}}>
                    <div className='container border border-dark rounded p-3 mt-5 w-50'>   

                    <div
                        className='bg-white text-white d-flex justify-content-center py-2 mb-3 rounded'
                    >
                        <img src={logo} alt="Logo gob" width='30%'  />
                    </div>

                    <form >

                        <div className="form-group">
                            <label className='mb-1'>Nombre</label>
                            <input 
                                type="text" 
                                className="form-control mb-3" 
                                id="inputName" 
                                placeholder="Enter Name" 
                                aria-invalid={errors.inputName ? "true" : "false"}
                                {...register("inputName", { required: true } )}
                            />
                            {errors.inputName && errors.inputName.type === "required" && 
                                (<span role="alert" className='text-danger'>We need your Name!</span>)}

                        </div>

                        <div className="form-group">
                            <label className='mb-1'>Email address</label>
                            <input 
                                type="email" 
                                className="form-control mb-3" 
                                id="inputEmail" 
                                placeholder="Enter email" 
                                aria-invalid={errors.inputEmail ? "true" : "false"}
                                {...register("inputEmail", { required: true } )}
                            />
                            {errors.inputEmail && errors.inputEmail.type === "required" && 
                                (<span role="alert" className='text-danger'>We need your Email!</span>)}

                        </div>

                        <div className="form-group">

                            <label>Password</label>

                            <input 
                                type="password" 
                                className="form-control" 
                                id="inputPassword" 
                                placeholder="Password" 
                                aria-invalid={errors.inputPassword ? "true" : "false"}
                                {...register("inputPassword", { required: true })}  
                            />

                            {errors.inputPassword && errors.inputPassword.type === "required" &&
                                (<span role="alert" className='text-danger'>Password is required!</span>)}
                        </div>


                        <div className="row d-flex justify-align-center mt-5">

                            <div className="col d-flex justify-content-center">    
                                <button 
                                    type="submit" 
                                    className="btn btn-dark mt-2 w-50" 
                                    onClick={handleSubmit(onSubmit)}
                                >Login</button>
                            </div>

                        </div>

                    </form>
                        

                        <div className=" d-flex justify-content-center my-3  w-100">
                        <button 
                            className='btn btn-dark w-50'
                            onClick={ onHandleSignIn }                             
                        > Sign In
                        </button>
                        </div>

                    </div>
                </div>
    
    </>
    )
}