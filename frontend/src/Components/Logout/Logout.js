import Axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import "./Logout.css"
import {useState, useEffect } from "react";
const Logout = () => {
    const navigate = useNavigate();
    const [isLogout, setIsLogout] = useState(false);
    function logoutUser(){
        Axios.get(`/api/g1/logout`)
        .then(response => {
            toast.success("Your are logged out",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
            setIsLogout(true);
        })
        .catch(error => {
            // Handle error.
            toast.error("Your email/password is incorrect!",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
            console.log('An error occurred:', error.response);
        });
    }

    useEffect(()=>{
        isLogout?navigate("/"):navigate("/logout");
    },[isLogout]);
    return (
        <div className="logout-user">
            <ToastContainer />
            <button onClick={()=>(logoutUser())} type="button" class="btn btn-outline-success">Log Out</button>
        </div>
    )
}

export default Logout;