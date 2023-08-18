import React from "react"
import { Outlet, useNavigate,Navigate,useLocation } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    console.log(isLoggedIn)
    
    if (isLoggedIn === false) {
        console.log("ss")
        return (
            <Navigate

                to="/login" 
                state={{message: "You must log in first",from:location.pathname }}
                replace 
            />)
    }
    return <Outlet />
}