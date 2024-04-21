import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useContext, useEffect } from "react";
import {  toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";


const UpdateProfile = () => {
    useEffect(() => {
        document.title = "Update Profile"
    });
    const {setUser,user} = useContext(AuthContext)
    console.log(user)
    
    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name');
        const photo = form.get('photo');
        
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(()=>{
            setUser((prevUser) => {
                return { ...prevUser, displayName: name, photoURL: photo };
            })
            toast.success('User Update Successfully');
        })
       
        
    }
    return (
        <div className=" mx-auto ">
            <div>
                <h3 className="text-center text-3xl font-bold my-8"> Please Update</h3>
                <form onSubmit={handleUpdate} className="  ">
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
                   
                    <div className="form-control mt-6">
                        <button className="btn btn-primary mb-7">Update</button>
                    </div>
                   
                </form>
               
            </div>
            
        </div>
    );
};

export default UpdateProfile;