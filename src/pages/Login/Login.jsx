import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {toast, Toaster} from "react-hot-toast";
const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { signIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setLoginError(' ');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    toast.success('Login has been successfully')
                }
            })
            .catch(error => {
                console.error(error);
                setLoginError('Invalid email or password')
            })
    }

    return (
        <>
            <div className="hero min-h-screen mt-10">

                <div className="flex flex-col lg:flex-row-reverse shadow-2xl   mx-auto">
                    <div className="text-center pt-20 p-5 my-10 max-w-lg w-full rounded  ">
                        <h1 className="text-5xl font-bold">New Here!</h1>
                        <p>Sign up and discover a great of Task management!</p>
                        <p className="mt-2">Do not have an account? <Link className="text-white btn border-2 rounded-full bg-sky-600 ml-2" to='/signup'>Sign Up</Link></p>
                    </div>
                    <div className="card  my-10 max-w-lg w-full rounded flex mx-auto bg-base-100">
                        <h2 className="p-5 text-2xl font-bold">Login In Now</h2>
                        <form className="card-body" onSubmit={handleLogin}>
                            {
                                loginError && <p className="text-red-500">{loginError}</p>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="outline outline-gray-300 p-2 focus:border-sky-600 focus:border-2 rounded" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="outline outline-gray-300 p-2 focus:border-sky-600 focus:border-2 rounded" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="p-2 bg-sky-600 text-white border-0 rounded">Log In</button>
                            </div>

                            <SocialLogin />
                        </form>
                    </div>
                </div>
                <Toaster/>
            </div>
        </>
    );
};

export default Login;
