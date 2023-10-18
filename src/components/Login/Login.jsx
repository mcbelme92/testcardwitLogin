import { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      onLogin(email);
    } else {
      alert("Correo electrónico o contraseña no válidos. Inténtalo de nuevo.");
    }
  };

  const isValidEmail = (email) => {
    // Expresión regular que verifica que el correo sea de Gmail o Hotmail.
    const emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|hotmail\.com)$/;
    return emailPattern.test(email);
  };

  return (
    <div id="login-form" className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          pattern="[a-zA-Z0-9!#$%&'*\/=?^_`\{\|\}~\+\-]([\.]?[a-zA-Z0-9!#$%&'*\/=?^_`\{\|\}~\+\-])+@[a-zA-Z0-9]([^@&%$\/\(\)=?¿!\.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
          onChange={(e) => setEmail(e.target.value)}
          title="Correo no válido solo admite gmail o hotmail"
          className="form-control"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
export default Login;
