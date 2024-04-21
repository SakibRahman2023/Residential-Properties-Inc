
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";



const Navbar = () => {
   
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            toast.success('User LogOut Successfully');
        })
        .catch()
    }

    const NavLinks = <>
        <li className="text-lg font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/about">About</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/contact">Contact Us</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/login">LogIn</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/register">Register</NavLink></li>
       
        
        {
            user &&<>
                {/* <li className="text-lg font-semibold"><NavLink to="/update"></NavLink></li> */}
                <li className="text-lg font-semibold"><NavLink to="/user">Update Profile</NavLink></li>
            </>
        }
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="text-xl md:text-2xl font-bold animate__animated animate__flip"><span className="text-orange-500"><span className="text-2xl md:text-4xl">R</span>esidential</span> Properties Inc</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                
               
                
                {user ? (
                    <>
                        <div className="lg:tooltip" data-tip={user.displayName}>
                            <img
                                className="w-10 h-10 rounded-full hover:opacity-75"
                                alt="User Profile"
                                src={user.photoURL}
                            />
                            </div>
                        <button onClick={handleLogOut} className="border-2 py-.5 px-2 font-bold text-lg border-orange-500 rounded-xl text-orange-500">Log out</button>
                    </>
                ) : (
                    <Link to="/login">
                        <button className="border-2 py-.5 px-2 font-bold text-lg border-orange-500 rounded-xl text-orange-500">Login</button>
                    </Link>
                )}


               
            </div>
        </div>
    );
};

export default Navbar;