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
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mb-4 mx-4">
                <div className="card-body p-4">
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <div className="input-group mb-3"><span className="input-group-text">
                  <i className="fa-solid fa-user"></i>
                      </span>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" type="text" placeholder="Username"/>
                  </div>
                  <div className="input-group mb-3"><span className="input-group-text">
                  <i className="fa-solid fa-lock"></i>
                      </span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" placeholder="Password"/>
                  </div>
                  <div className="input-group mb-3"><span className="input-group-text">
                  <i className="fa-solid fa-pen"></i>
                      </span>
                    <input value={role} onChange={(e) => setRole(e.target.value)} className="form-control" type="text" placeholder="Role"/>
                  </div>
                  <button className="btn btn-block button-login" type="button" onClick={handleRegister}>Create Account</button>
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