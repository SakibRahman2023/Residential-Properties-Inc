import { useEffect } from "react";
import { Link } from "react-router-dom";


const Error = () => {
    useEffect(() => {
        document.title = "Error"
    });
    return (
        <div className="text-center mt-20 md:mt-30">
            <h1 className=" text-[100px] md:text-[300px] font-bold">404</h1>
            <h2 className="text-5xl font-bold">
                NOT FOUND
            </h2>

            <button><Link to="/"> Go To Home</Link></button>

            
        </div>
    );
};

export default Error;