import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Login from "./components/Login/Login";
import { getData } from "./api/data.api";
import "./App.css";

function App() {
  const [users, setusers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        const response = await getData();
        setusers(response);
      }
    })();
  }, [isLoggedIn]);

  const handleLogin = () => {
    // Simula una autenticación exitosa después de 1 segundo.
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  };

  return (
    <>
      <div>
        {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Card users={users} />}
      </div>
    </>
  );
}

export default App;
