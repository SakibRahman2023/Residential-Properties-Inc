import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
    useEffect(() => {
        document.title = "Register"
    });

    const { createUser,setReload,logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    // const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error('please password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('please password should be at least 1 upper case character');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('please password should be at least 1 lower case character');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            toast.error('please password should be at least 1 integer number');
            return;
        }

        createUser(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                .then(()=>{
                    setReload(true);
                    navigate('/login');
                    toast.success('User Register Successfully')
                    logOut()
                    .then()
                    .catch()
                })
                
               
                console.log(result.user)
                
                
                
               
            })
            .catch(error => {
                console.error(error)
                
                toast.error('User check Email and other')
            })
        
    }

    return (
        <div>
            <div className="animate__animated animate__fadeInDown">
            
            <form onSubmit={handleRegister} className=" mx-5 md:w-2/3 lg:w-1/2 md:mx-auto mt-5 border-2 rounded-2xl bg-green-300 p-5  ">
                    <h3 className="text-center text-3xl font-bold my-8"> Please Register</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
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
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="my-6 text-center">You have already an account. Please <Link to="/login"><span className="font-bold text-blue-700 ">Log In</span></Link></p>
            </form>
            {/* {registerSuccess && toast(<p >{registerSuccess}</p>)} */}
            {/* <ToastContainer /> */}
        </div>
        </div>
    );
};

export default Register;


