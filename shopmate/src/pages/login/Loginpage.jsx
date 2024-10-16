import { useState } from "react";
import "./loginpage.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChanage = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.username === formData.username &&
        u.email === formData.email &&
        u.password === formData.password
    );
    if (user) {
      onlogin(user);
      navigate("/");
    } else {
      setError("Invalid credentials.!");
    }
  };
  return (
    <div className="Loginpage">
      <h3>
        Shop
        <span>
          Mate
          <FaShoppingCart />
        </span>
      </h3>
      <h2 className="login">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChanage}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChanage}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChanage}
          required
        />
        {error && <p>{error}</p>}
        <button type="submit" className="signbtn">
          login
        </button>
      </form>
      <h4 className="links">
        <a href="signup">signup</a>
      </h4>
    </div>
  );
};

export default Loginpage;
