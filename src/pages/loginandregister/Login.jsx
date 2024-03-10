import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const data = {
            username: username,
            password: password
        }

        try {
            const response = await fetch('https://localhost:44397/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const { jwtToken } = await response.json();
                localStorage.setItem('token', jwtToken);
                navigate('/');
                window.location.reload();
            }


        } catch (error) {
            console.log("qaqa nagarirsan");
        }
    };

    return (
    //     <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    //   <div class="container">
    //     <div class="row justify-content-center">
    //       <div class="col-lg-8">
    //         <div class="card-group d-block d-md-flex row">
    //           <div class="card col-md-7 p-4 mb-0">
    //             <div class="card-body">

    //               <form action="">
    //               <h1>Login</h1>
    //               <p class="text-medium-emphasis">Sign In to your account</p>
    //               <div class="input-group mb-3"><span class="input-group-text">
    //                   <svg class="icon">
    //                     <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
    //                   </svg></span>
    //                 <input class="form-control" type="text" placeholder="Username">
    //               </div>
    //               <div class="input-group mb-4"><span class="input-group-text">
    //                   <svg class="icon">
    //                     <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
    //                   </svg></span>
    //                 <input class="form-control" type="password" placeholder="Password">
    //               </div>
    //               <div class="row">
    //                 <div class="col-6">
    //                   <button class="btn btn-primary px-4" type="button">Login</button>
    //                 </div>
    //                 <div class="col-6 text-end">
    //                   <button class="btn btn-link px-0" type="button">Forgot password?</button>
    //                 </div>
    //               </div>
    //               </form>
    //             </div>
    //           </div>
    //           <div class="card col-md-5 text-white bg-primary py-5">
    //             <div class="card-body text-center">
    //               <div>
    //                 <h2>Sign up</h2>
    //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //                 <button class="btn btn-lg btn-outline-light mt-3" type="button">Register Now!</button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
      <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div> 
    );
};

export default Login;