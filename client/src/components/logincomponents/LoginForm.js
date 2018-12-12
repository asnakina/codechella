import React from 'react';

function LoginForm(props) {
  return (
    <form
   className="register-form"
   onSubmit={props.handleSubmit}>
   <label htmlFor="username">Username</label>
   <input
     type="text"
     id="username"
     name="username"
     onChange={props.handleChange}
     value={props.username} />
   <label htmlFor="password">Password</label>
   <input
     type="password"
     id="password"
     name="password"
     onChange={props.handleChange}
     value={props.password} />
   <button onClick={props.swapUserForm}>Register</button>
   <input type="submit" value="Login" />
 </form>
  )
}
export default LoginForm;
