import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("https://localhost:44397/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { jwtToken } = await response.json();
        localStorage.setItem("token", jwtToken);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log("qaqa nagarirsan");
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card-group d-block d-md-flex row">
              <div className="card col-md-7 p-4 mb-0">
                <div className="card-body">
                  <form action="">
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-text">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button
                          className="btn button-login px-4"
                          onClick={handleLogin}
                          type="button"
                        >
                          Login
                        </button>
                      </div>
                      <div className="col-6 text-end link-color">
                        <button
                          className="btn btn-link px-0 link-color"
                          type="button"
                        >
                          Forgot password?
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card col-md-5 text-white card-color py-5">
                <div className="card-body text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <button
                        className="btn btn-lg btn-outline-light mt-3"
                        type="button"
                      >
                        Register Now!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <div>
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
        </div>  */
  );
};

export default Login;
