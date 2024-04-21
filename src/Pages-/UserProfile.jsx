import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UpdateProfile from "./UpdateProfile";


const UserProfile = () => {
    useEffect(() => {
        document.title = "User Profile"
    });
    const {user} = useContext(AuthContext);
    return (
      <div className="my-14 mx-5 md:flex md:gap-5 space-y-5 md:space-y-0">
            <div className="card w-full md:w-1/2 bg-green-100 shadow-xl border-2 border-gray-300 animate__animated animate__slideInLeft">
                <div data-aos="flip-right" data-aos-duration="1000">
                    <figure className="px-10 pt-10 ">
                        <img src={user.photoURL
                        } alt="Shoes" className="w-56 h-56 rounded-full" />
                    </figure>
               </div>
                <div>
                    <form >
                        <p className="text-center font-semibold text-orange-500 mt-7 text-xl">{user.displayName}</p>
                        <p className="text-lg font-medium text-center my-3">Email: {user.email}</p>
                        <p className="text-lg font-medium text-center mb-6">PhotoUrl: {user.photoURL}</p>
                    </form>
                </div>
                </div>
            <div className="md:w-1/2 border-2 border-gray-300 rounded-2xl p-2 bg-green-100 shadow-2xl animate__animated animate__slideInRight">
               <UpdateProfile></UpdateProfile>
            </div>
      </div>
    );
};

export default UserProfile;