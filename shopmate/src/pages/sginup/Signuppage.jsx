import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import './signup.css'

const Signuppage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' , email:'' });// is like taking the form to a new form (setFormData)

  const navigate = useNavigate(); // after signup it will take you to the cart

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }) // this place everything in the right way like fill the correct key in the right box
  };

  const handleSubmit =(e) =>{ // to prevent the submit btn from working when the inputs are not fill
    e.preventDefault(); // stop the page from reloading
    const users = JSON.parse(localStorage.getItem('users')) || []; // to check if a user as acc if not we signup on a new pages for new users
    users.push(formData); // for putting new users
    localStorage.setItem('users',JSON.stringify(users)); // to store the user imform in the browser storage so you don have to re fill them again
    navigate('/login') //after a new user signup it takes u to a login page to login
  };


  return (
    <div className='Signuppage'>
      <h3>Shop<span>Mate<FaShoppingCart/></span></h3>
      <h2 className='signup'>signUp</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input type="Email" 
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type='submit' className='signbtn'>SignUp</button>
      </form>
       <div className="link">
       <h4 className='links'><a href="login">login</a></h4>
       </div>
    </div>
  )
}

export default Signuppage