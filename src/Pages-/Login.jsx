import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../Provider/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
    useEffect(() => {
        document.title = "Login"
    });
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const { SignIn } = useContext(AuthContext);
    const navigate = useNavigate(); 
    const location = useLocation();
    console.log(location);
    
    const [showPassword,setShowPassword] =useState(false)

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                toast.success('User Login Successfully');
                const user = result.user;
              console.log(user);
                navigate(location?.state ? location.state :'/'); 
               
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const user = result.user;
                toast.success('User Login Successfully');
                console.log(user);
                navigate(location?.state ? location.state : '/'); 
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        SignIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successfully');
                navigate(location?.state ? location.state : '/'); 
            })
            .catch(error => {
                toast.error('User Email Not Found');
                console.log(error.message);
            });
       
    }
    
    return (
        <div className="animate__animated animate__zoomInDown">
            
            <form onSubmit={handleLogin} className="mx-5 md:w-2/3 lg:w-1/2 md:mx-auto border-2 p-5 border-green-500 bg-emerald-200 rounded-2xl ">
                <h3 className="text-center text-3xl font-bold my-8"> Please LogIn</h3>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                   <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"} placeholder="password" name="password"
                            className="input input-bordered w-full" required />
                        <span className="absolute mt-4 ml-[-40px]" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEye /> : <IoEyeOff />
                            }
                        </span>
                   </div>
                    
                </div>
                <div className="form-control my-6">
                    <button className="btn btn-primary">Log In</button>
                </div>
                <p className="mb-6 text-center">Don't have an account? <Link to="/register"><span className="font-bold text-blue-700 ">Register</span></Link></p>
               

                <h3 className="text-center font-medium text-lg">Or Login with </h3>
                    <div className="flex gap-5 justify-center my-5 bg-slate-50 mx-auto p-2 rounded-full">
                    <button onClick={handleGoogleSignIn} className=" flex items-center gap-2" ><span className="text-3xl"><FcGoogle /></span> </button>
                    <button onClick={handleGithubSignIn} className=" flex items-center gap-2" ><span className="text-3xl "><FaGithub></FaGithub></span> </button>
                    </div>
              
            </form>
           
        </div>
    );
};

export default Login;