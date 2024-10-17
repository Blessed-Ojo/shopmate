import { useEffect, useState } from "react";
import "./loginpage.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Loginpage = ({onLogin}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const [success,setSccess] =useState('')

  const navigate = useNavigate();

  useEffect(() =>{
    const savedUser = JSON.parse(localStorage.getItem('savedUser'))
    if (savedUser) {
      setFormData(savedUser)
    }
  },[])

  const handleChanage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      onLogin(user);
      localStorage.setItem('savedUser',JSON.stringify(formData))
      setSccess("Login successful!");
      setError("");
      setTimeout(()=>navigate("/"),2000)
    } else {
      setError("Invalid credentials.!");
      setSccess("")
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
          autoComplete="username" 
          value={formData.username}
          onChange={handleChanage}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          autoComplete="email" 
          value={formData.email}
          onChange={handleChanage}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="password" 
          value={formData.password}
          onChange={handleChanage}
          required
        />
        {error && <p>{error}</p>}
        {success&& <p>{success}</p>}
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
