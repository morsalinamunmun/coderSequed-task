
import { useForm } from 'react-hook-form';

import { Link } from "react-router-dom";
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Signup = () => {
    const {
        register,
        formState: { errors },
    } = useForm();
   
    return (
        <>
            <div className="hero min-h-screen py-20 max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left space-y-5">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <div className='border border-sky-600 p-2'><SocialLogin/></div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="outline outline-gray-300 p-2 focus:border-sky-600 focus:border-2" required />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo Url" className="outline outline-gray-300 p-2 focus:border-sky-600 focus:border-2" required />
                                {errors.photoURL && <span className="text-red-600">Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, })} name="email" placeholder="Email" className="outline outline-gray-300 p-2 focus:border-sky-600 focus:border-2" required />
                                {errors.email && errors.email.type === "required" && (
                                    <span className="text-red-600">Email is required</span>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <span className="text-red-600">Invalid email format</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="outline outline-gray-300 p-2 focus:border-sky-600 focus:border-2" required />
                                {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 character</p>}
                                {errors.password?.type === "maxLength" && <p className="text-red-600">Password must be less than 20 character</p>}
                                {errors.password?.type === "pattern" && <p className="text-red-600">Password must have one uppercase one lowercase, one number and one special character </p>}
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="p-2 bg-sky-600 text-white border-0">Sign Up</button>
                            </div>
                        </form>
                        <p>Already have an account? <Link to="/login" className='text-sky-500'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;