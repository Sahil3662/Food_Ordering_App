import React from "react";
import { useRouteError } from "react-router-dom";

const CustomError= () =>{
 const errorDetails = useRouteError();
 console.log("errorDetails",errorDetails);
    return(
        <div className="d-flex flex-column justify-content-center align-items-center gap-3" style={{height:"100vh"}}>
            <div className="swiggyLogo"><img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-2048x1152.png" alt="logo" style={{height:"100px"}}></img></div>
            <div>Error Code: {errorDetails?.status}.  {errorDetails?.statusText}</div>
            <div>{errorDetails?.data}</div>
            <div className="text-secondary">That's all we know!</div>
            <div className="robotLogo"><img src="https://tse4.mm.bing.net/th?id=OIP.MzJ5APLul_sKdTvHoGQAMQHaHa&pid=Api&P=0&h=180" alt="logo"/></div>
        </div>
    )
}

export default CustomError;