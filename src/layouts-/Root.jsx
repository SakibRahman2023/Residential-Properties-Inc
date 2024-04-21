import {Outlet} from "react-router-dom";
import Navbar from "../Pages-/Navbar";
import Footer from "../Pages-/Footer";

const Root = () => {
    return (
        <div className=" mx-auto mt-5 work">
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;