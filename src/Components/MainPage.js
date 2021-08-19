import { useState } from "react";
import LoginForm from "./LoginForm";
import "./MainPage.css";
import SearchImage from "../Components/SearchImage"


function MainPage() {
  const adminUser = {
    email: "venkat@email.com",
    password: "12345678",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    // authentication
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("Details do not match!!");
      setError("Details do not match!!");
    }
  };

  const Logout = () => {
    console.log("LOGOUT");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">

      {/* using ternary operator for login logout */}
      {user.email !== "" ? (
        <div className="welcome">
          <h1>WELCOME!! <span>{user.name}</span> to SNAPSHOT</h1>
          <SearchImage/>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        <div>
        <h1>LOGIN FORM</h1>
        <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );
}

export default MainPage;
