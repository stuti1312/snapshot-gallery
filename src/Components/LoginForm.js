import React, { useState } from "react";
import "./LoginForm.css";

// login and error are the props which are getting destrcutured here so as to use them inside this component as they are properties of other component
const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const changeHandler = (e) =>
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="form-inner">
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group1">
          <label htmlFor="name">Name: </label><br/>
          <input
            type="text"
            name="name"
            id="name"
            onChange={changeHandler}
            // onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div className="form-group2">
          <label htmlFor="email">Email: </label><br/>
          <input
            type="text"
            name="email"
            id="email"
            onChange={changeHandler}
            // onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>

        <div className="form-group3">
          <label htmlFor="password">Password: </label><br/>
          <input
            type="text"
            name="password"
            id="password"
            onChange={changeHandler}
            // onChange={(e) =>
            //   setDetails({ ...details, password: e.target.value })
            // }
            value={details.password}
          />
        </div>

        <input type="submit" value="LOGIN" className="login-btn"/>
      </div>
    </form>
  );
};

export default LoginForm;
