import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/')
                })
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
           <button onClick={handleGoogleSignIn} className="ml-1 flex items-center text-blue-500 underline"><FcGoogle></FcGoogle>Login With Google</button>
        </div>
    );
};

export default SocialLogin;