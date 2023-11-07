import {React,useState} from 'react'
import "./Signup.css"
import Axios from "axios"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';


function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        //for registering users ------------
        Axios.post(`/api/g1/register`, {
            name: username,
            email: email,
            password: password,
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            toast.success("Check your email for confimation", {
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            });
            document.getElementById("signup-form").reset();
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
        })
        .catch(error => {
            // Handle error.
            toast.error("Your password should be more than 8 characters",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:1300
            })
            document.getElementById("signup-form").reset();
            console.log('An error occurred:', error.message);
            console.log('An error occurred:', error);
        });
    }

  return (
    <div className='signup'>
        <section class="vh-100">
        <ToastContainer />
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{borderRadius: "25px"}}>
                <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form id="signup-form" class="mx-1 mx-md-4">

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} id="form3Example1c" class="form-control" />
                                <label class="form-label" for="form3Example1c">Your Name</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="form3Example3c" class="form-control" />
                                <div>
                                    <label class="form-label" for="form3Example4c">Email</label>
                                </div>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="form3Example4c" class="form-control" />
                                <label class="form-label" for="form3Example4c">Password</label>
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <Link to="/login" className='create-btn' style={{margin:"0 0 0 1.5rem"}}>Already Have a Account?</Link>
                            </div>



                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                               <button onClick={handleSubmit} style={{backgroundColor:"#2669bf",color:"white"}} class="btn btn-lg">Register</button>
                            </div>

                        </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image" />

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Signup;