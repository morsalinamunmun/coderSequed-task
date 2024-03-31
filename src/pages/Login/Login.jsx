import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Login = () => {
    return (
        <>
        <div className="hero min-h-screen bg-gradient-to-r from-[#FDBA74] to-[#F97316]">
           
            <div className="flex flex-col lg:flex-row-reverse  mx-auto">
                <div className="text-center pt-20 p-5 bg-orange-400  my-10 max-w-lg w-full shadow-2xl rounded  ">
                    <h1 className="text-5xl font-bold">New Here!</h1>
                    <p>Sign up and discover a great of new opportunities!</p>
                    <p className="mt-2">Do not have an account? <Link className="text-white btn border-2 rounded-full bg-orange-500 ml-2" to='/signup'>Sign Up</Link></p>
                </div>
                <div className="card  my-10  shadow-2xl max-w-lg w-full rounded flex mx-auto bg-base-100">
                    <h2 className="p-5 text-2xl font-bold">Login In Now</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="rounded-full border-2 border-orange-500 input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input rounded-full border-2 border-orange-500 input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-full bg-orange-500 text-white">Log In</button>
                        </div>
                        
                        <SocialLogin/>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
