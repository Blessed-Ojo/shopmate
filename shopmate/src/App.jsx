import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Homepage";
import Cart from "./pages/cart/Cartpage";
import Login from "./pages/login/Loginpage";
import Signup from "./pages/sginup/Signuppage";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null); // to track if a user login or not

  useEffect(() => {
    const saveduser = localStorage.getItem("user"); // this is to get user key from the localstorage in the browser
    if (saveduser) setUser(JSON.parse(saveduser)); // if the user is saved(saveduser) load user from the browser localstorage
  }, []);

  // it is to keep the userdata like (username, email,password)
  const handleLogin = (userData) => {
    setUser(userData); //this is where the data of the setuser as input is save
    localStorage.setItem("user", JSON.stringify(userData)); // here is where the the data of the save userdata is storage user the user
  };

  // to remove user
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="App">
      <Router>

        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
            {/* this code if u r login u will see the cart if not it will take u to the login to do that first */}
          <Route path="cart" element={user ? <Cart/> : <Navigate to='login'/>} /> 
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
