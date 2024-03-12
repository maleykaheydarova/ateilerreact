import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const data = {
            username: username,
            password: password,
            roles: [role]
        }
        console.log(data);
        try {
            const response = await fetch('https://localhost:44397/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log("You have registered successfully. Please login");
                navigate('/login');
            }
        }
        catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div class="bg-color min-vh-100 d-flex flex-row align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="card mb-4 mx-4">
                <div class="card-body p-4">
                  <h1>Register</h1>
                  <p class="text-medium-emphasis">Create your account</p>
                  <div class="input-group mb-3"><span class="input-group-text">
                  <i class="fa-solid fa-user"></i>
                      </span>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" type="text" placeholder="Username"/>
                  </div>
                  <div class="input-group mb-3"><span class="input-group-text">
                  <i class="fa-solid fa-lock"></i>
                      </span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" type="password" placeholder="Password"/>
                  </div>
                  <div class="input-group mb-3"><span class="input-group-text">
                  <i class="fa-solid fa-pen"></i>
                      </span>
                    <input value={role} onChange={(e) => setRole(e.target.value)} class="form-control" type="text" placeholder="Role"/>
                  </div>
                  <button class="btn btn-block button-login" type="button" onClick={handleRegister}>Create Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        /* <div>
            <h1>Register</h1>
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
                <label>
                    Role:
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div> */
    );
};

export default Register;