import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts-/Root";
import Home from "../Pages-/Home";
import About from "../Pages-/About";
import Contact from "../Pages-/Contact";
import Login from "../Pages-/Login";
// import UpdateProfile from "../Pages-/UpdateProfile";
import Register from "../Pages-/Register";
// import Estate from "../Pages-/Estate";
import UserProfile from "../Pages-/UserProfile";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages-/Error";
import Details from "../Pages-/Details";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('./officer.json')
               
            },
            {
                path:"/about",
                element: <PrivateRoute><About></About></PrivateRoute>,
                
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/estate.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            // {
            //     path:"/update",
            //     element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            // },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/user",
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
          
            
            // {
            //     path:"/estate",
            //     element:<Estate></Estate>,
            //     loader:() =>fetch('estate.json')
            // }
        ]
    }
]);

export default router;