import React from 'react'
import { Link, NavLink,useNavigate } from "react-router-dom";

export default  function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const navigate = useNavigate()
    const fakeLogOut = ()=>{
        localStorage.removeItem("loggedin");
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/login",{replace:true})
    }
    return (
        <header>
            <Link to='/'>Home</Link>
            <nav>
                <NavLink 
                    to='/login'
                    style={({isActive})=>isActive?activeStyles:null}
                >
                    Login
                </NavLink>
                <NavLink 
                    to='/registration'
                    style={({isActive})=>isActive?activeStyles:null}
                >
                    Registration
                </NavLink>
                <NavLink 
                    to='/post'
                    style={({isActive})=>isActive?activeStyles:null}
                >
                    Post
                </NavLink>
                <button onClick={fakeLogOut}>Logout</button>
            </nav>
        </header>
    )
  
}
