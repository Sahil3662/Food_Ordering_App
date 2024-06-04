import App from "../App";
import About from "./About";
import Body from "./Body";
import Contact from "./Contact";
import { createBrowserRouter } from "react-router-dom";
import CustomError from "./CustomError";
import Menu from "./Menu";

const Approuter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <CustomError/>,
        children: [
            {
                path: "",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path :"menu/:resId",
                element:<Menu />
            }
        ]
    }
])

export default Approuter;