import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Signup.css'
import SignUpImg from '../../../Asset/form-illustrator/Sign up-pana.svg'
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Share/Loading/Loading';

const SignUP = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let navigate = useNavigate();


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success('SignUp sucessfully')
        }
    }, [user, from, navigate])

    // if (user) {
    //     navigate('/')
    // }

    if (loading || updating) {
        return <Loading></Loading>
    }
    let loginError;
    if (error || updateError) {
        loginError = <p className='text-red-500'>{error?.message || error?.updateError}</p>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log(data)
    }
    
    return (
        <div className='loginContainer'>

            <div>
                <img className='login-img ' src={SignUpImg} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className="text-center font-bold">Sign Up</h2>
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label><br />
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="inputStyle"
                        // {...register("firstName", { required: true })}
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            },

                        })}
                    /><br />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-danger">{errors.name.message}</span>}


                    </label><br />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label><br />
                    <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="inputStyle"
                        // {...register("firstName", { required: true })}
                        {...register("email", {
                            required: {
                                value: true,
                                message: "E-mail is required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid E-mail'
                            }
                        })}
                    /><br />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-danger">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger">{errors.email.message}</span>}

                    </label><br />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label><br />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="inputStyle"
                        // {...register("firstName", { required: true })}
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    /><br />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}

                    </label><br />
                    {loginError}
                </div>

                <input type="submit" className='lg:ml-20 form-button ml-3' value="SignUp" />

                <p className='text-center mt-2'><small>
                    Already have an account ?
                    <Link className='text-primary ml-2'
                        to='/login'>Please login
                    </Link></small>
                </p>

                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default SignUP;
