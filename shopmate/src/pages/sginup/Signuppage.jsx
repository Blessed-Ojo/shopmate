import'./signup.css'

const Signuppage = () => {
  return (
    <div className='Signuppage'>
       <h3>Shop<span>Mate</span></h3>
        <h2 className='signup'>signUp</h2>
        <form>
          <input 
          type="text" 
           name="username"
           placeholder="username"
           value
            onChange
            required
          />
          <input
          type="password"
          name="password"
          placeholder="Password"
          value
          onChange
          required
          />
          <button type='submit' className='signbtn'>SignUp</button>
        </form>
    </div>
  )
}

export default Signuppage